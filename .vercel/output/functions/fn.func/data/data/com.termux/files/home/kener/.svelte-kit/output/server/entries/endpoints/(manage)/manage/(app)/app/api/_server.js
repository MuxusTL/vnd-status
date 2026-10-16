import { j as json } from "../../../../../../../chunks/index.js";
import { N as Notification, S as Service } from "../../../../../../../chunks/notif.js";
import { b as base } from "../../../../../../../chunks/paths.js";
import { format } from "date-fns";
import { O as IsLoggedInSession, Q as UpdateUserData, T as ManualUpdateUserData, W as GetUserByID, X as UpdatePassword, Y as CreateNewUser, Z as GetUserByEmail, _ as CreateNewInvitation, r as GetAllSiteData, s as GetSiteLogoURL, S as SendEmailWithTemplate, $ as CreateUpdateMonitor, a0 as UpdateMonitoringData, g as GetMonitors, D as DeleteMonitorCompletelyUsingTag, a1 as CreateUpdateTrigger, K as GetAllTriggers, a2 as UpdateTriggerData, a3 as GetAllAlertsPaginated, a4 as GetAllAPIKeys, a5 as CreateNewAPIKey, a6 as UpdateApiKeyStatus, a7 as GetIncidentsDashboard, M as GetIncidentByIDDashboard, C as CreateIncident, U as UpdateIncident, A as AddIncidentMonitor, a as RemoveIncidentMonitor, a8 as GetIncidentActiveComments, c as AddIncidentComment, e as UpdateCommentStatusByID, d as UpdateCommentByID, a9 as GetTriggerByID, N as GetMonitorsParsed, aa as CreateSubscriptionTrigger, ab as GetSubscriptionTriggerByEmail, ac as GetSubscribersPaginated, ad as UpdateSubscriptionStatus, ae as UpdateSubscriptionTriggerStatus, af as InsertKeyValue } from "../../../../../../../chunks/controller.js";
import { I as INVITE_VERIFY_EMAIL, G as GetNowTimestampUTC, M as MANUAL } from "../../../../../../../chunks/db.js";
const verifyEmailTemplate = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n<html dir="ltr" lang="en">\n  <head>\n    <link rel="preload" as="image" href="{{logo_url}}" />\n    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />\n    <meta name="x-apple-disable-message-reformatting" />\n    <!--$-->\n  </head>\n  <div\n    style="\n      display: none;\n      overflow: hidden;\n      line-height: 1px;\n      opacity: 0;\n      max-height: 0;\n      max-width: 0;\n    "\n  >\n    Verify your email address for {{brand_name}}\n  </div>\n\n  <body\n    style="\n      background-color: rgb(243, 244, 246);\n      font-family:\n        ui-sans-serif, system-ui, sans-serif, &quot;Apple Color Emoji&quot;,\n        &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;;\n    "\n  >\n    <table\n      align="center"\n      width="100%"\n      border="0"\n      cellpadding="0"\n      cellspacing="0"\n      role="presentation"\n      style="\n        margin-left: auto;\n        margin-right: auto;\n        margin-top: 40px;\n        margin-bottom: 40px;\n        background-color: rgb(255, 255, 255);\n        padding: 20px;\n        border-radius: 8px;\n        box-shadow:\n          var(--tw-ring-offset-shadow, 0 0 #0000),\n          var(--tw-ring-shadow, 0 0 #0000),\n          0 1px 2px 0 rgb(0, 0, 0, 0.05);\n        max-width: 37.5em;\n      "\n    >\n      <tbody>\n        <tr style="width: 100%">\n          <td>\n            <table\n              align="center"\n              width="100%"\n              border="0"\n              cellpadding="0"\n              cellspacing="0"\n              role="presentation"\n              style="margin-top: 32px"\n            >\n              <tbody>\n                <tr>\n                  <td>\n                    <img\n                      alt="{{brand_name}}"\n                      height="auto"\n                      src="{{logo_url}}"\n                      style="\n                        margin-left: auto;\n                        margin-right: auto;\n                        display: block;\n                        outline: none;\n                        border: none;\n                        text-decoration: none;\n                      "\n                      width="120"\n                    />\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n            <table\n              align="center"\n              width="100%"\n              border="0"\n              cellpadding="0"\n              cellspacing="0"\n              role="presentation"\n              style="margin-top: 32px"\n            >\n              <tbody>\n                <tr>\n                  <td>\n                    <h1\n                      style="\n                        font-size: 24px;\n                        font-weight: 700;\n                        text-align: center;\n                        color: rgb(31, 41, 55);\n                      "\n                    >\n                      Verify Your Email Address\n                    </h1>\n                    <p\n                      style="\n                        font-size: 16px;\n                        color: rgb(75, 85, 99);\n                        margin-bottom: 24px;\n                        line-height: 24px;\n                        margin: 16px 0;\n                      "\n                    >\n                      Thank you for signing up with\n                      <!-- -->{{brand_name}}<!-- -->! To complete your registration and get started,\n                      please verify your email address.\n                    </p>\n                    <p\n                      style="\n                        font-size: 16px;\n                        color: rgb(75, 85, 99);\n                        margin-bottom: 32px;\n                        line-height: 24px;\n                        margin: 16px 0;\n                      "\n                    >\n                      Click the button below to verify your email address and activate your account:\n                    </p>\n                    <a\n                      href="{{verification_url}}"\n                      style="\n                        box-sizing: border-box;\n                        border-radius: 4px;\n                        font-weight: 500;\n                        text-decoration-line: none;\n                        text-align: center;\n                        color: rgb(255, 255, 255);\n                        line-height: 100%;\n                        text-decoration: none;\n                        display: inline-block;\n                        max-width: 100%;\n                        mso-padding-alt: 0px;\n                        background-color: #ed702d;\n                        padding: 12px 24px 12px 24px;\n                      "\n                      target="_blank"\n                      ><span\n                        ><!--[if mso\n                          ]><i style="mso-font-width: 400%; mso-text-raise: 18" hidden\n                            >&#8202;&#8202;&#8202;</i\n                          ><!\n                        [endif]--></span\n                      ><span\n                        style="\n                          max-width: 100%;\n                          display: inline-block;\n                          line-height: 120%;\n                          mso-padding-alt: 0px;\n                          mso-text-raise: 9px;\n                        "\n                        >Verify Email Address</span\n                      ><span\n                        ><!--[if mso\n                          ]><i style="mso-font-width: 400%" hidden\n                            >&#8202;&#8202;&#8202;&#8203;</i\n                          ><!\n                        [endif]--></span\n                      ></a\n                    >\n                    <p\n                      style="\n                        font-size: 14px;\n                        color: rgb(107, 114, 128);\n                        margin-top: 32px;\n                        line-height: 24px;\n                        margin: 16px 0;\n                      "\n                    >\n                      If you didn&#x27;t create an account with\n                      <!-- -->{{brand_name}}<!-- -->, you can safely ignore this email.\n                    </p>\n                    <p\n                      style="\n                        font-size: 14px;\n                        color: rgb(107, 114, 128);\n                        line-height: 24px;\n                        margin: 16px 0;\n                      "\n                    >\n                      If the button above doesn&#x27;t work, copy and paste the following link into\n                      your browser:\n                    </p>\n                    <p\n                      style="\n                        font-size: 14px;\n                        color: rgb(107, 114, 128);\n                        word-break: break-all;\n                        line-height: 24px;\n                        margin: 16px 0;\n                      "\n                    >\n                      <a\n                        href="{{verification_url}}"\n                        style="color: rgb(37, 99, 235); text-decoration-line: underline"\n                        target="_blank"\n                        >{{verification_url}}</a\n                      >\n                    </p>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n    <!--/$-->\n  </body>\n</html>\n';
function AdminEditorCan(role) {
  if (role !== "admin" && role !== "editor") {
    throw new Error("Only Admins and Editors can perform this action");
  }
}
async function POST({ request, cookies }) {
  const payload = await request.json();
  let action = payload.action;
  let data = payload.data || {};
  let resp = {};
  let isLoggedIn = await IsLoggedInSession(cookies);
  if (!!isLoggedIn.error) {
    return json({ error: "User not logged in" }, { status: 401 });
  }
  let userDB = isLoggedIn.user;
  try {
    if (action == "updateUser") {
      data.userID = userDB.id;
      resp = await UpdateUserData(data);
    } else if (action == "manualUpdate") {
      await ManualUpdateUserData(userDB, data.id, data);
      resp = await GetUserByID(data.id);
    } else if (action == "updatePassword") {
      data.userID = userDB.id;
      resp = await UpdatePassword(data);
    } else if (action == "createNewUser") {
      await CreateNewUser(userDB, data);
      resp = await GetUserByEmail(data.email);
    } else if (action == "sendVerificationEmail") {
      data.invitation_type = INVITE_VERIFY_EMAIL;
      let toEmail = userDB.email;
      let toId = userDB.id;
      if (!!data.toId) {
        toId = data.toId;
        let user = await GetUserByID(toId);
        if (!!!user) {
          throw new Error("User not found");
        }
        toEmail = user.email;
      }
      data.invited_user_id = toId;
      data.invited_by_user_id = userDB.id;
      data.invitation_meta = JSON.stringify({
        header: "Email Verified Successfully",
        message: "Thanks for verifying your email"
      });
      const expiryTimestamp = GetNowTimestampUTC() + 3600;
      const expiryDate = new Date(expiryTimestamp * 1e3);
      data.invitation_expiry = format(expiryDate, "yyyy-MM-dd HH:mm:ss");
      resp = await CreateNewInvitation(data);
      let token = resp.invitation_token;
      let siteData = await GetAllSiteData();
      let emailData = {
        brand_name: siteData.siteName,
        logo_url: await GetSiteLogoURL(siteData.siteURL, siteData.logo, base),
        verification_url: siteData.siteURL + base + "/manage/invitation?token=" + token
      };
      resp = await SendEmailWithTemplate(
        verifyEmailTemplate,
        emailData,
        toEmail,
        `[Important] Verify email for ${emailData.brand_name}`,
        `go to ${emailData.verification_url} to verify email`
      );
    } else if (action === "storeSiteData") {
      AdminEditorCan(userDB.role);
      resp = await storeSiteData(data);
    } else if (action == "storeMonitorData") {
      AdminEditorCan(userDB.role);
      resp = await CreateUpdateMonitor(data);
    } else if (action == "updateMonitoringData") {
      data.type = MANUAL;
      resp = await UpdateMonitoringData(data);
    } else if (action == "getMonitors") {
      resp = await GetMonitors(data);
    } else if (action == "deleteMonitor") {
      AdminEditorCan(userDB.role);
      resp = await DeleteMonitorCompletelyUsingTag(data.tag);
    } else if (action == "createUpdateTrigger") {
      AdminEditorCan(userDB.role);
      resp = await CreateUpdateTrigger(data);
    } else if (action == "getTriggers") {
      resp = await GetAllTriggers(data);
    } else if (action == "updateMonitorTriggers") {
      AdminEditorCan(userDB.role);
      resp = await UpdateTriggerData(data);
    } else if (action == "getAllAlertsPaginated") {
      resp = await GetAllAlertsPaginated(data);
    } else if (action == "getAPIKeys") {
      resp = await GetAllAPIKeys();
    } else if (action == "createNewApiKey") {
      AdminEditorCan(userDB.role);
      resp = await CreateNewAPIKey(data);
    } else if (action == "updateApiKeyStatus") {
      AdminEditorCan(userDB.role);
      resp = await UpdateApiKeyStatus(data);
    } else if (action == "getIncidents") {
      resp = await GetIncidentsDashboard(data);
    } else if (action == "getIncident") {
      resp = await GetIncidentByIDDashboard(data);
      if (!!!resp) {
        throw new Error("Incident not found");
      }
    } else if (action == "createIncident") {
      AdminEditorCan(userDB.role);
      resp = await CreateIncident(data);
    } else if (action == "updateIncident") {
      AdminEditorCan(userDB.role);
      resp = await UpdateIncident(data.id, data);
    } else if (action == "addMonitor") {
      AdminEditorCan(userDB.role);
      resp = await AddIncidentMonitor(data.incident_id, data.monitor_tag, data.monitor_impact);
    } else if (action == "removeMonitor") {
      AdminEditorCan(userDB.role);
      resp = await RemoveIncidentMonitor(data.incident_id, data.monitor_tag);
    } else if (action == "getComments") {
      resp = await GetIncidentActiveComments(data.incident_id);
    } else if (action == "addComment") {
      AdminEditorCan(userDB.role);
      resp = await AddIncidentComment(data.incident_id, data.comment, data.state, data.commented_at);
    } else if (action == "deleteComment") {
      AdminEditorCan(userDB.role);
      resp = await UpdateCommentStatusByID(data.incident_id, data.comment_id, "INACTIVE");
    } else if (action == "updateComment") {
      AdminEditorCan(userDB.role);
      resp = await UpdateCommentByID(data.incident_id, data.comment_id, data.comment, data.state, data.commented_at);
    } else if (action == "testTrigger") {
      let trigger = await GetTriggerByID(data.trigger_id);
      let siteData = await GetAllSiteData();
      const notificationClient = new Notification(trigger, siteData, {});
      const testObj = {
        id: "test",
        alert_name: "Test Alert " + Math.floor(Math.random() * 100) % 2 == 0 ? "DOWN" : "DEGRADED",
        severity: Math.floor(Math.random() * 100) % 2 == 0 ? "critical" : "warning",
        status: Math.floor(Math.random() * 100) % 2 == 0 ? "TRIGGERED" : "RESOLVED",
        source: "Kener",
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        description: "Monitor has failed",
        details: {
          metric: "Test",
          current_value: Math.floor(Math.random() * 100),
          threshold: Math.floor(Math.random() * 100)
        },
        actions: [
          {
            text: "View Monitor",
            url: siteData.siteURL + "/monitor-test"
          }
        ]
      };
      resp = await notificationClient.send(testObj);
      if (resp.error) {
        throw new Error(resp.error);
      }
    } else if (action == "testMonitor") {
      let monitorID = data.monitor_id;
      let monitors = await GetMonitorsParsed({ id: monitorID });
      let monitor = monitors[0];
      if (monitor.monitor_type === "NONE") {
        throw new Error("Tests can't be run on monitor type NONE");
      }
      const serviceClient = new Service(monitor);
      resp = await serviceClient.execute();
    } else if (action == "createSubscriptionTrigger") {
      resp = await CreateSubscriptionTrigger(data);
    } else if (action == "getSubscriptionTrigger") {
      resp = await GetSubscriptionTriggerByEmail();
    } else if (action == "getSubscribers") {
      resp = await GetSubscribersPaginated(data);
    } else if (action == "updateSubscriptionStatus") {
      resp = await UpdateSubscriptionStatus(data.id, data.status);
    } else if (action == "updateSubscriptionTriggerStatus") {
      resp = await UpdateSubscriptionTriggerStatus(data.id, data.status);
    }
  } catch (error) {
    console.log(error);
    resp = { error: error.message };
    return json(resp, { status: 500 });
  }
  return json(resp, { status: 200 });
}
async function storeSiteData(data) {
  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      const element = data[key];
      await InsertKeyValue(key, element);
    }
  }
  return { success: true };
}
export {
  POST
};
