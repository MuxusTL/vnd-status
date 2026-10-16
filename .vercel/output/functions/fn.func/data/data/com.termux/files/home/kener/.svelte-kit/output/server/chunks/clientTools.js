function siteDataExtractFromDb(data, obj) {
  let requestedObject = { ...obj };
  for (const key in requestedObject) {
    if (Object.prototype.hasOwnProperty.call(requestedObject, key)) {
      data[key];
      if (data[key]) {
        requestedObject[key] = data[key];
      }
    }
  }
  for (const key in requestedObject) {
    if (Object.prototype.hasOwnProperty.call(requestedObject, key)) {
      const element = requestedObject[key];
      if (element === null || element === "") {
        delete requestedObject[key];
      }
    }
  }
  return requestedObject;
}
function SortMonitor(monitorSort, resp) {
  let monitors = [];
  if (!!monitorSort && monitorSort.length > 0) {
    monitors = monitorSort.map((id) => resp.find((m) => m.id == id)).filter((m) => !!m);
    monitors = [...monitors, ...resp.filter((m) => !monitorSort.includes(m.id))];
  } else {
    monitors = resp;
  }
  return monitors;
}
export {
  SortMonitor as S,
  siteDataExtractFromDb as s
};
