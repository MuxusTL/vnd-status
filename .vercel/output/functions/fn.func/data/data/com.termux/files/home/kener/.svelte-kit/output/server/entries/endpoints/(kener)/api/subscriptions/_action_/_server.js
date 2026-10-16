import { j as json } from "../../../../../../chunks/index.js";
import { V as ValidateEmail, d as GenerateRandomNumber } from "../../../../../../chunks/db.js";
import { j as VerifyToken, k as GetSubscriberByID, l as RemoveAllSubscriptions, m as CreateNewSubscription, n as GetSubscriptionsBySubscriberID, o as GetSubscriberByEmailAndType, p as CreateNewSubscriber, q as UpdateSubscriberMeta, r as GetAllSiteData, s as GetSiteLogoURL, S as SendEmailWithTemplate, t as GenerateTokenWithExpiry, u as UpdateSubscriberStatus } from "../../../../../../chunks/controller.js";
import { b as base } from "../../../../../../chunks/paths.js";
const emailCodeTemplate = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n<html dir="ltr" lang="en">\n  <head>\n    <link rel="preload" as="image" href="{{logo_url}}" />\n    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />\n    <meta name="x-apple-disable-message-reformatting" />\n  </head>\n  <body\n    style="\n      background-color: rgb(243, 244, 246);\n      font-family:\n        ui-sans-serif, system-ui, sans-serif, &quot;Apple Color Emoji&quot;,\n        &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;;\n      padding-top: 40px;\n      padding-bottom: 40px;\n    "\n  >\n    <!--$-->\n    <div\n      style="\n        display: none;\n        overflow: hidden;\n        line-height: 1px;\n        opacity: 0;\n        max-height: 0;\n        max-width: 0;\n      "\n    >\n      Your verification code: {{email_code}}\n    </div>\n    <table\n      align="center"\n      width="100%"\n      border="0"\n      cellpadding="0"\n      cellspacing="0"\n      role="presentation"\n      style="\n        background-color: rgb(255, 255, 255);\n        border-radius: 8px;\n        margin-left: auto;\n        margin-right: auto;\n        margin-top: 0px;\n        margin-bottom: 0px;\n        padding: 24px;\n        max-width: 600px;\n      "\n    >\n      <tbody>\n        <tr style="width: 100%">\n          <td>\n            <table\n              align="center"\n              width="100%"\n              border="0"\n              cellpadding="0"\n              cellspacing="0"\n              role="presentation"\n              style="margin-top: 8px; margin-bottom: 32px; text-align: center"\n            >\n              <tbody>\n                <tr>\n                  <td>\n                    <img\n                      alt="{{brand_name}}"\n                      height="40"\n                      src="{{logo_url}}"\n                      style="\n                        margin-left: auto;\n                        margin-right: auto;\n                        display: block;\n                        outline: none;\n                        border: none;\n                        text-decoration: none;\n                      "\n                      width="120"\n                    />\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n            <table\n              align="center"\n              width="100%"\n              border="0"\n              cellpadding="0"\n              cellspacing="0"\n              role="presentation"\n            >\n              <tbody>\n                <tr>\n                  <td>\n                    <h1\n                      style="\n                        font-size: 24px;\n                        font-weight: 700;\n                        color: rgb(31, 41, 55);\n                        margin-bottom: 16px;\n                        text-align: center;\n                      "\n                    >\n                      Verification Code\n                    </h1>\n                    <p\n                      style="\n                        font-size: 16px;\n                        color: rgb(75, 85, 99);\n                        margin-bottom: 24px;\n                        line-height: 24px;\n                        margin-top: 16px;\n                      "\n                    >\n                      To complete your {{action}} for {{brand_name}} updates, please use the\n                      verification code below:\n                    </p>\n                    <table\n                      align="center"\n                      width="100%"\n                      border="0"\n                      cellpadding="0"\n                      cellspacing="0"\n                      role="presentation"\n                      style="\n                        background-color: rgb(249, 250, 251);\n                        border-width: 1px;\n                        border-color: rgb(229, 231, 235);\n                        border-radius: 8px;\n                        padding: 24px;\n                        margin-bottom: 24px;\n                        text-align: center;\n                      "\n                    >\n                      <tbody>\n                        <tr>\n                          <td>\n                            <p\n                              style="\n                                font-size: 32px;\n                                font-weight: 700;\n                                letter-spacing: 4px;\n                                color: rgb(31, 41, 55);\n                                margin: 0px;\n                                line-height: 24px;\n                                margin-bottom: 0px;\n                                margin-top: 0px;\n                                margin-left: 0px;\n                                margin-right: 0px;\n                              "\n                            >\n                              {{email_code}}\n                            </p>\n                          </td>\n                        </tr>\n                      </tbody>\n                    </table>\n                    <p\n                      style="\n                        font-size: 16px;\n                        color: rgb(75, 85, 99);\n                        margin-bottom: 24px;\n                        line-height: 24px;\n                        margin-top: 16px;\n                      "\n                    >\n                      This code will expire in 5 minutes. If you didn&#x27;t request this code, you\n                      can safely ignore this email.\n                    </p>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n    <!--7--><!--/$-->\n  </body>\n</html>\n';
async function subscribe(data) {
  const decoded = await VerifyToken(data.token);
  if (!!!decoded) {
    return json({ message: "Invalid token" }, { status: 400 });
  }
  let email = decoded.email;
  if (!!!email) {
    return json({ message: "Invalid email" }, { status: 400 });
  }
  let subscriber_id = decoded.subscriber_id;
  if (!!!subscriber_id) {
    return json({ message: "Invalid subscriber_id" }, { status: 400 });
  }
  let existingSubscriber = await GetSubscriberByID(subscriber_id);
  if (!!!existingSubscriber) {
    return json({ message: "No active subscription found" }, { status: 400 });
  }
  let monitors = data.monitors;
  if (data.allMonitors) {
    monitors = ["_"];
  }
  if (!!!monitors || monitors.length == 0) {
    await RemoveAllSubscriptions(existingSubscriber.id);
    return json({ message: "Unsubscribed successfully" }, { status: 200 });
  }
  try {
    await CreateNewSubscription(subscriber_id, monitors);
  } catch (e) {
    console.error("Error in CreateNewSubscription: ", e);
    return json({ message: "Error in CreateNewSubscription" }, { status: 500 });
  }
  return json({ message: "Subscription created successfully" }, { status: 200 });
}
async function unsubscribe(token) {
  const decoded = await VerifyToken(token);
  if (!!!decoded) {
    return json({ message: "Invalid token" }, { status: 400 });
  }
  let email = decoded.email;
  if (!!!email) {
    return json({ message: "Invalid email" }, { status: 400 });
  }
  let subscriber_id = decoded.subscriber_id;
  if (!!!subscriber_id) {
    return json({ message: "Invalid subscriber_id" }, { status: 400 });
  }
  let existingSubscriber = await GetSubscriberByID(subscriber_id);
  if (!!!existingSubscriber) {
    return json({ message: "No active subscription found" }, { status: 400 });
  }
  await RemoveAllSubscriptions(existingSubscriber.id);
  return json({ message: "Unsubscribed successfully" }, { status: 200 });
}
async function fetchData(token) {
  const decoded = await VerifyToken(token);
  if (!!!decoded) {
    return json({ message: "Invalid token" }, { status: 400 });
  }
  let email = decoded.email;
  if (!!!email) {
    return json({ message: "Invalid email" }, { status: 400 });
  }
  let subscriber_id = decoded.subscriber_id;
  if (!!!subscriber_id) {
    return json({ message: "Invalid subscriber_id" }, { status: 400 });
  }
  let existingSubscriber = await GetSubscriberByID(subscriber_id);
  if (!!!existingSubscriber) {
    return json({ message: "No active subscription found" }, { status: 400 });
  }
  let monitors = [];
  let allSubscriptions = await GetSubscriptionsBySubscriberID(subscriber_id);
  if (!!allSubscriptions) {
    monitors = allSubscriptions.map((item) => {
      return item.subscriptions_monitors;
    });
  }
  return json({ monitors, email: existingSubscriber.subscriber_send }, { status: 200 });
}
async function login(email) {
  if (!ValidateEmail(email)) {
    return json({ message: "Invalid email address" }, { status: 400 });
  }
  let subscriberMeta = {
    email_code: GenerateRandomNumber(6)
  };
  const existingUser = await GetSubscriberByEmailAndType(email, "email");
  if (!!!existingUser) {
    let newSubscriberData = {
      subscriber_send: email,
      subscriber_type: "email",
      subscriber_status: "PENDING",
      subscriber_meta: JSON.stringify(subscriberMeta)
    };
    await CreateNewSubscriber(newSubscriberData);
  } else {
    await UpdateSubscriberMeta(existingUser.id, JSON.stringify(subscriberMeta));
  }
  let siteData = await GetAllSiteData();
  let emailData = {
    brand_name: siteData.siteName,
    logo_url: await GetSiteLogoURL(siteData.siteURL, siteData.logo, base),
    email_code: subscriberMeta.email_code,
    action: "login"
  };
  let resp = await SendEmailWithTemplate(
    emailCodeTemplate,
    emailData,
    email,
    `[Important] Verify code to login to ${emailData.brand_name}`,
    `Your verification code is: ${emailData.email_code}`
  );
  if (resp.error) {
    console.error("Error in SendEmailWithTemplate: ", resp.error);
    return json({ message: "Error sending email" }, { status: 500 });
  }
  return json({ newUser: false, token: await GenerateTokenWithExpiry({ email }, "1m") }, { status: 200 });
}
async function verifyToken(token, code) {
  const decoded = await VerifyToken(token);
  if (!!!decoded) {
    return json({ message: "Invalid token" }, { status: 400 });
  }
  let email = decoded.email;
  if (!!!email) {
    return json({ message: "Invalid email" }, { status: 400 });
  }
  let existingSubscriber = await GetSubscriberByEmailAndType(email, "email");
  if (!!!existingSubscriber) {
    return json({ message: "Invalid User" }, { status: 400 });
  }
  let subscriberMeta = JSON.parse(existingSubscriber.subscriber_meta);
  let storeCode = subscriberMeta.email_code;
  if (!!!storeCode) {
    return json({ message: "Invalid Data" }, { status: 400 });
  }
  if (storeCode != code) {
    return json({ message: "Invalid Code" }, { status: 400 });
  }
  await UpdateSubscriberStatus(existingSubscriber.id, "ACTIVE");
  await UpdateSubscriberMeta(existingSubscriber.id, JSON.stringify({}));
  return json(
    {
      token: await GenerateTokenWithExpiry(
        {
          email,
          subscriber_id: existingSubscriber.id
        },
        "1y"
      )
    },
    { status: 200 }
  );
}
async function POST({ request, params }) {
  const data = await request.json();
  const action = params.action;
  data.type;
  try {
    if (action == "login") {
      return await login(data.userEmail);
    } else if (action == "verify") {
      return await verifyToken(data.token, data.code);
    } else if (action == "subscribe") {
      return await subscribe(data);
    } else if (action == "unsubscribe") {
      return await unsubscribe(data.token);
    } else if (action == "fetch") {
      return await fetchData(data.token);
    }
  } catch (e) {
    return json({ message: "Error in creating email subscription" }, { status: 500 });
  }
  return json({ message: "Invalid action" }, { status: 400 });
}
export {
  POST
};
