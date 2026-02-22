
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

exports.reminderCheck = functions.pubsub.schedule("every 1 minutes").onRun(async()=>{
 const db=admin.firestore();
 const snap=await db.collection("medicines").get();
 const now=new Date().toLocaleTimeString();
 snap.forEach(doc=>{
  const d=doc.data();
  if(d.time===now && d.status==="pending"){
    console.log("Reminder:",d.name);
  }
 });
});
