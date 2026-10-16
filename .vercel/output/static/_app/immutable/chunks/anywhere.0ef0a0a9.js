const e=JSON.stringify({username:"{{site_name}}",avatar_url:"{{{logo_url}}}",content:`## {{alert_name}}
{{#is_triggered}}🔴 Triggered{{/is_triggered}}{{#is_resolved}}🟢 Resolved{{/is_resolved}}
{{description}}
Click [{{action_text}}]({{{action_url}}}) for more.`,embeds:[{title:"{{alert_name}}",description:"{{description}}",url:"{{{action_url}}}",color:"{{#is_triggered}}13250616{{/is_triggered}}{{#is_resolved}}5156244{{/is_resolved}}",fields:[{name:"Monitor",value:"{{metric}}",inline:!1},{name:"Severity",value:"{{severity}}",inline:!1},{name:"Alert ID",value:"{{id}}",inline:!1},{name:"Current Value",value:"{{current_value}}",inline:!0},{name:"Threshold",value:"{{threshold}}",inline:!0}],footer:{text:"{{source}}",icon_url:"{{{logo_url}}}"},timestamp:"{{timestamp}}"}]},null,2),t=JSON.stringify({id:"{{id}}",alert_name:"{{alert_name}}",severity:"{{severity}}",status:"{{status}}",source:"{{source}}",timestamp:"{{timestamp}}",description:"{{description}}",details:{metric:"{{metric}}",current_value:"{{current_value}}",threshold:"{{threshold}}"},actions:[{text:"{{action_text}}",url:"{{{action_url}}}"}]},null,2),r=JSON.stringify({blocks:[{type:"header",text:{type:"plain_text",text:"{{alert_name}}",emoji:!0}},{type:"header",text:{type:"plain_text",text:"{{#is_triggered}}🔴 Triggered{{/is_triggered}}{{#is_resolved}}🟢 Resolved{{/is_resolved}}",emoji:!0}},{type:"section",text:{type:"mrkdwn",text:`{{description}}
*Source:* {{source}}
*Severity:* {{severity}}
*Status:* {{status}}`}},{type:"section",fields:[{type:"mrkdwn",text:`*Metric:*
{{metric}}`},{type:"mrkdwn",text:`*Current Value:*
{{current_value}}`},{type:"mrkdwn",text:`*Threshold:*
{{threshold}}`},{type:"mrkdwn",text:`*Timestamp:*
<!date^{{timestamp_unix}}^{date} at {time}|{{timestamp}}>`}]},{type:"actions",elements:[{type:"button",text:{type:"plain_text",text:"{{action_text}}"},url:"{{{action_url}}}",style:"primary"}]}]},null,2),a=`(async function (statusCode, responseTime, responseRaw, modules) {
	let statusCodeShort = Math.floor(statusCode/100);
    if(statusCode == 429 || (statusCodeShort >=2 && statusCodeShort <= 3)) {
        return {
			status: 'UP',
			latency: responseTime,
        }
    } 
	return {
		status: 'DOWN',
		latency: responseTime,
	}
})`,n=`(async function (arrayOfPings) {
	let latencyTotal = arrayOfPings.reduce((acc, ping) => {
		return acc + ping.latency;
	}, 0);

	let alive = arrayOfPings.reduce((acc, ping) => {
		return acc && ping.alive;
	}, true);

	return {
		status: alive ? 'UP' : 'DOWN',
		latency: latencyTotal / arrayOfPings.length,
	}
})`,s=`(async function (arrayOfPings) {
	let latencyTotal = arrayOfPings.reduce((acc, ping) => {
		return acc + ping.latency;
	}, 0);

	let alive = arrayOfPings.reduce((acc, ping) => {
		return acc && ping.status === "open";
	}, true);

	return {
		status: alive ? 'UP' : 'DOWN',
		latency: latencyTotal / arrayOfPings.length,
	}
})`,i=`(async function (responseTime, responseRaw) {
	return {
		status: 'UP',
		latency: responseTime,
	}
})`,l=10*1e3,o=2*1e3;export{e as D,o as G,r as S,t as W,a,s as b,n as c,l as d,i as e};
