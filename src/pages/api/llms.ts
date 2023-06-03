import type { NextApiRequest, NextApiResponse } from 'next';

interface LLM {
  name: string;
  minVRAM: number;
}

const llms: LLM[] = [
  // Add LLMs data here
    {name: "LLaMA-7B", minVRAM: 10},
    // {name: "LLaMA-13B", minVRAM: 20},
    // {name: "LLaMA-30B", minVRAM: 40},

];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { graphicsCard, processor, totalRam } = req.body;
  console.log(req.body);
  // Compare system requirements and filter LLMs
//   const filteredLLMs = llms.filter((llm) => {
//     // Add comparison logic here
//   });

  res.status(200).json(llms);
}