import fs from "fs";
import path from "path";

export default function handler(req, res){
  if (req.query.check){
    const f = path.join("/tmp", `count_${req.query.check}.txt`);
    if (!fs.existsSync(f)) return res.send("0");
    return res.send(fs.readFileSync(f).toString());
  }

  const subid = req.query.subid || "none";
  if (subid === "none") return res.send("NO SUBID");

  const f = path.join("/tmp", `count_${subid}.txt`);
  let c = 0;
  if (fs.existsSync(f)) c = parseInt(fs.readFileSync(f))||0;
  fs.writeFileSync(f, String(c+1));
  res.send("OK");
}
