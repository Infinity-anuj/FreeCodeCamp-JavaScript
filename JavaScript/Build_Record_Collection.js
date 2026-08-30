function updateRecords(records, id, prop, value) {
  if (value === "") {
    // ❌ If value is empty string → delete the property
    delete records[id][prop];
  } else if (prop !== "tracks") {
    // 🎵 If prop is not "tracks" → set the value directly
    records[id][prop] = value;
  } else {
    // 🎶 If prop is "tracks"
    if (!records[id].hasOwnProperty("tracks")) {
      // If no tracks property → create an empty array first
      records[id]["tracks"] = [];
    }
    // Push the new track value
    records[id]["tracks"].push(value);
  }

  // ✅ Always return the entire records object
  return records;
}
