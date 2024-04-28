import { Request, Response } from "express";

class TestController {
  test = (req: Request, res: Response) => {
    res.send("Express + TypeScript Server hehe");
  };

  kwontol = (req: Request, res: Response) => {
    const golongan = 1;
    const gajiKotor = 2000;
    const gajiBersih = 1000;
    const totalTunjangan = 500;

    const data = {
      "golongan": golongan,
      "gaji_kotor": gajiKotor,
      "gaji_bersih": gajiBersih,
      "total_tunjangan": totalTunjangan,
    }
    res.send(data);
  }

  testPost = (req: Request, res: Response) => {
    const payload = req.body;
    res.send(payload)
  }
}

export default new TestController();
