/**
 * Artwork Data
 *
 * This is the mock data source used when no backend API is configured.
 *
 * HOW TO ADD A NEW ARTWORK:
 * 1. Add a new object to the artworks array below.
 * 2. Make sure `id` is unique (use the next sequential number or a UUID).
 * 3. For `image`, use a URL from Unsplash or your own hosted asset.
 * 4. `status` must be "available" | "sold" | "reserved".
 * 5. Run the app — the new artwork appears automatically in the gallery.
 *
 * FIELDS REFERENCE:
 *   id           — unique string identifier
 *   title        — artwork name
 *   artist       — artist display name
 *   artistBio    — short bio shown on detail page
 *   year         — creation year
 *   medium       — e.g. "Oil on canvas"
 *   dimensions   — e.g. "120 × 90 cm"
 *   category     — used for filtering; must match a value in CATEGORIES
 *   price        — number in the configured currency (EUR by default)
 *   status       — "available" | "sold" | "reserved"
 *   image        — URL to artwork image
 *   description  — paragraph(s) describing the work
 *   featured     — boolean; shows on home page featured section
 *   tags         — string[] for future search/filter use
 */

export const CATEGORIES = [
  "Painting",
  "Photography",
  "Sculpture",
  "Digital Art",
  "Drawing",
  "Mixed Media",
];

export const artworks = [
  {
    id: "1",
    title: "Coastal Reverie",
    artist: "Marta Villanueva",
    artistBio:
      "Marta Villanueva is a Spanish-born painter based in Munich, whose work explores the liminal space between memory and landscape.",
    year: 2023,
    medium: "Oil on canvas",
    dimensions: "140 × 100 cm",
    category: "Painting",
    price: 3200,
    status: "available",
    image: "https://images.unsplash.com/photo-1578926288207-a90a5366759d?w=800&q=80",
    description:
      "Coastal Reverie draws from the artist's childhood summers on the Catalan coast. The horizon dissolves into layered blues and greens, inviting the viewer into a meditation on distance and belonging. A quiet painting — one that rewards time spent with it.",
    featured: true,
    tags: ["landscape", "ocean", "blue", "contemplative"],
  },
  {
    id: "2",
    title: "Urban Palimpsest II",
    artist: "Jonas Brandt",
    artistBio:
      "Jonas Brandt is a Berlin-based photographer whose practice documents the invisible histories written into city surfaces.",
    year: 2022,
    medium: "Archival pigment print",
    dimensions: "90 × 60 cm",
    category: "Photography",
    price: 1450,
    status: "available",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    description:
      "Part of a series photographing layered architectural surfaces across European capitals, Urban Palimpsest II captures the accumulated texture of a Berlin wall — years of paint, posters, and weather compressed into a single frame.",
    featured: true,
    tags: ["urban", "architecture", "monochrome", "texture"],
  },
  {
    id: "3",
    title: "Emergence",
    artist: "Aiko Tanaka",
    artistBio:
      "Aiko Tanaka works between ceramics and sculpture, creating forms that suggest organic processes caught mid-transformation.",
    year: 2024,
    medium: "Glazed stoneware",
    dimensions: "45 × 30 × 30 cm",
    category: "Sculpture",
    price: 2800,
    status: "available",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    description:
      "Emergence is a hand-built stoneware sculpture fired at high temperature with a layered iron oxide glaze. The form references growth from mineral substrates — mineral, botanical, and somehow architectural all at once.",
    featured: true,
    tags: ["sculpture", "ceramic", "organic", "3d"],
  },
  {
    id: "4",
    title: "Quiet Interior",
    artist: "Marta Villanueva",
    artistBio:
      "Marta Villanueva is a Spanish-born painter based in Munich, whose work explores the liminal space between memory and landscape.",
    year: 2023,
    medium: "Acrylic on linen",
    dimensions: "80 × 80 cm",
    category: "Painting",
    price: 1900,
    status: "reserved",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&q=80",
    description:
      "A domestic interior reduced to its essentials — table, window, morning light. Villanueva strips away narrative to leave only atmosphere, a feeling of inhabited space moments before activity resumes.",
    featured: false,
    tags: ["interior", "light", "domestic", "quiet"],
  },
  {
    id: "5",
    title: "Fracture Series #7",
    artist: "Elena Müller",
    artistBio:
      "Elena Müller is a Leipzig-based digital artist who translates geological data into large-format prints.",
    year: 2024,
    medium: "Digital print on aluminium",
    dimensions: "120 × 80 cm",
    category: "Digital Art",
    price: 2100,
    status: "available",
    image: "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=800&q=80",
    description:
      "Fracture Series #7 visualises seismic data from the 2023 Turkish earthquake through a custom generative algorithm. The result is both scientifically derived and unexpectedly beautiful — a record of enormous geological forces rendered as an abstract composition.",
    featured: false,
    tags: ["generative", "data", "geological", "abstract"],
  },
  {
    id: "6",
    title: "Portrait in October Light",
    artist: "Jonas Brandt",
    artistBio:
      "Jonas Brandt is a Berlin-based photographer whose practice documents the invisible histories written into city surfaces.",
    year: 2021,
    medium: "Silver gelatin print",
    dimensions: "50 × 40 cm",
    category: "Photography",
    price: 980,
    status: "sold",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80",
    description:
      "Shot on medium-format film in natural window light, Portrait in October Light is a departure from Brandt's architectural work — an intimate study of a friend's face in the quality of afternoon light particular to northern European autumn.",
    featured: false,
    tags: ["portrait", "film", "light", "intimate"],
  },
  {
    id: "7",
    title: "Deep Atlas I",
    artist: "Elena Müller",
    artistBio:
      "Elena Müller is a Leipzig-based digital artist who translates geological data into large-format prints.",
    year: 2023,
    medium: "Digital print on cotton rag",
    dimensions: "160 × 120 cm",
    category: "Digital Art",
    price: 3500,
    status: "available",
    image: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&q=80",
    description:
      "The first in a planned series of twelve, Deep Atlas I maps ocean floor bathymetric data as a painterly abstraction. At this scale, the shifts in depth register as passages of colour — aquatic, geological, and luminous.",
    featured: true,
    tags: ["ocean", "data", "large-scale", "blue"],
  },
  {
    id: "8",
    title: "Charcoal Study: Hands",
    artist: "Rafael Costa",
    artistBio:
      "Rafael Costa is a Lisbon-born draughtsman known for his precise yet emotional figurative work in charcoal and graphite.",
    year: 2022,
    medium: "Charcoal on paper",
    dimensions: "60 × 45 cm",
    category: "Drawing",
    price: 650,
    status: "available",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80",
    description:
      "A study from life, executed in a single session. Costa uses the side of the charcoal stick to build broad tonal masses, then lifts selectively with an eraser to create the highlights. The result has the directness and energy of observation in the moment.",
    featured: false,
    tags: ["figurative", "drawing", "hands", "charcoal"],
  },
  {
    id: "9",
    title: "Vessel Form",
    artist: "Aiko Tanaka",
    artistBio:
      "Aiko Tanaka works between ceramics and sculpture, creating forms that suggest organic processes caught mid-transformation.",
    year: 2024,
    medium: "Porcelain with celadon glaze",
    dimensions: "28 × 18 cm",
    category: "Sculpture",
    price: 1200,
    status: "available",
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80",
    description:
      "Thrown on the wheel and altered by hand before firing, Vessel Form explores the tension between functional pottery and pure sculpture. The celadon glaze pools differently in each fold of the surface, ensuring every piece is unique.",
    featured: false,
    tags: ["ceramic", "vessel", "celadon", "craft"],
  },
  {
    id: "10",
    title: "Borderlands",
    artist: "Marta Villanueva",
    artistBio:
      "Marta Villanueva is a Spanish-born painter based in Munich, whose work explores the liminal space between memory and landscape.",
    year: 2024,
    medium: "Oil and cold wax on board",
    dimensions: "100 × 100 cm",
    category: "Mixed Media",
    price: 4200,
    status: "available",
    image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=800&q=80",
    description:
      "In Borderlands, Villanueva abandons her usual painterly vocabulary for a more excavated surface. Built up in twenty-plus layers of oil and cold wax, sections are scraped back to reveal earlier stages — a geological record of the painting's own making.",
    featured: true,
    tags: ["abstract", "texture", "layered", "earthy"],
  },
  {
    id: "11",
    title: "Night Study",
    artist: "Rafael Costa",
    artistBio:
      "Rafael Costa is a Lisbon-born draughtsman known for his precise yet emotional figurative work in charcoal and graphite.",
    year: 2023,
    medium: "Graphite on paper",
    dimensions: "42 × 29.7 cm",
    category: "Drawing",
    price: 480,
    status: "available",
    image: "https://images.unsplash.com/photo-1509281373149-e957c6296406?w=800&q=80",
    description:
      "Executed at night from a window view across Lisbon, Night Study captures the particular quality of artificial light on urban surfaces — sodium orange and shadow. A small, precise work that holds a whole city's atmosphere.",
    featured: false,
    tags: ["nocturne", "urban", "graphite", "Lisbon"],
  },
  {
    id: "12",
    title: "Convergence",
    artist: "Elena Müller",
    artistBio:
      "Elena Müller is a Leipzig-based digital artist who translates geological data into large-format prints.",
    year: 2024,
    medium: "UV print on glass",
    dimensions: "80 × 80 cm",
    category: "Digital Art",
    price: 2600,
    status: "available",
    image: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=800&q=80",
    description:
      "Convergence was printed directly onto museum glass, so the work is simultaneously surface and depth. As light changes throughout the day, the image shifts — the printed layer seeming to float at different distances from the wall.",
    featured: false,
    tags: ["glass", "light", "abstract", "installation"],
  },
];
