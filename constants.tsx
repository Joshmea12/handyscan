
import { Project } from "./types";

export const MOCK_PROJECTS: Project[] = [
  {
    id: "1",
    title: "Modern Floating Shelf",
    description: "Build a sleek, minimalist floating shelf for your living room or office.",
    difficulty: "Beginner",
    timeEstimate: "2-3 Hours",
    costEstimate: "$30 - $50",
    category: "Woodworking",
    image: "https://picsum.photos/seed/shelf/800/600",
    tools: ["Drill", "Level", "Stud Finder", "Saw"],
    materials: ["Pine Board (2x10)", "Wood Glue", "L-Brackets (hidden)", "Wall Anchors"],
    steps: [
      { id: 1, title: "Cut the Wood", content: "Measure and cut your pine board to the desired length. Sand the edges for a smooth finish." },
      { id: 2, title: "Find the Studs", content: "Use a stud finder to locate the wall studs where you want to mount the shelf." },
      { id: 3, title: "Install Brackets", content: "Level and screw the hidden brackets into the studs." },
      { id: 4, title: "Mount and Finish", content: "Slide the board onto the brackets and secure it. Apply stain or paint as desired." }
    ]
  },
  {
    id: "2",
    title: "Leaky Faucet Fix",
    description: "Stop that annoying drip and save water by replacing your faucet's ceramic disc cartridge.",
    difficulty: "Intermediate",
    timeEstimate: "1 Hour",
    costEstimate: "$15 - $25",
    category: "Plumbing",
    image: "https://picsum.photos/seed/faucet/800/600",
    tools: ["Allen Wrench", "Adjustable Wrench", "Screwdriver"],
    materials: ["Replacement Cartridge", "Plumber's Grease"],
    steps: [
      { id: 1, title: "Shut off Water", content: "Turn off the water supply valves located under the sink." },
      { id: 2, title: "Remove Handle", content: "Use an allen wrench to loosen the set screw and pull the handle off." },
      { id: 3, title: "Replace Cartridge", content: "Unscrew the retaining nut and swap the old cartridge for the new one." }
    ]
  },
  {
    id: "3",
    title: "Garden Bed Installation",
    description: "Start your home-grown vegetable garden with a simple raised wooden bed.",
    difficulty: "Beginner",
    timeEstimate: "4 Hours",
    costEstimate: "$60 - $100",
    category: "Outdoor",
    image: "https://picsum.photos/seed/garden/800/600",
    tools: ["Impact Driver", "Circular Saw", "Shovel"],
    materials: ["Cedar Boards", "Exterior Screws", "Garden Soil", "Landscape Fabric"],
    steps: [
      { id: 1, title: "Level the Ground", content: "Clear the area and ensure the soil is relatively flat." },
      { id: 2, title: "Build the Frame", content: "Screw the cedar boards together to form a rectangle." },
      { id: 3, title: "Add Soil", content: "Lay landscape fabric to prevent weeds, then fill with high-quality soil." }
    ]
  }
];
