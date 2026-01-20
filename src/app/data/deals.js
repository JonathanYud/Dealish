const now = new Date();

function getStatus(start, end) {
  const startTime = new Date(start);
  const endTime = new Date(end);
  if (now < startTime) return 'upcoming';
  if (now > endTime) return 'past';
  return 'running';
}

export const deals = [
  {
    id: 1,
    title: "BOGO Free Pizza",
    restaurant: "Joe’s Slices",
    start_time: new Date("2026-01-30T12:00:00"),
    end_time: new Date("2026-01-30T14:00:00"),
    status: getStatus(new Date("2026-01-30T12:00:00"), new Date("2026-01-30T14:00:00")),
    description: "Free pizza with order of one",
    likes: 243,
    image: "/pizza.jpg",
  },
  {
    id: 2,
    title: "Wing Night",
    restaurant: "Big Wings",
    start_time: new Date("2026-01-30T17:00:00"),
    end_time: new Date("2026-01-30T22:00:00"),
    status: getStatus(new Date("2026-01-30T17:00:00"), new Date("2026-01-30T22:00:00")),
    description: "$0.50 wings",
    likes: 1000,
    image: null,
  },
  {
    id: 3,
    title: "Wing Night",
    restaurant: "Big Wings",
    start_time: new Date("2026-01-30T17:00:00"),
    end_time: new Date("2026-01-30T22:00:00"),
    status: getStatus(new Date("2026-01-30T17:00:00"), new Date("2026-01-30T22:00:00")),
    description: "$0.50 wings",
    likes: 1000,
    image: null,
  },
  {
    id: 4,
    title: "Wing Night",
    restaurant: "Big Wings",
    start_time: new Date("2026-01-30T17:00:00"),
    end_time: new Date("2026-01-30T22:00:00"),
    status: getStatus(new Date("2026-01-30T17:00:00"), new Date("2026-01-30T22:00:00")),
    description: "$0.50 wings",
    likes: 1000,
    image: null,
  },
  {
    id: 5,
    title: "Wing Night",
    restaurant: "Big Wings",
    start_time: new Date("2026-01-30T17:00:00"),
    end_time: new Date("2026-01-30T22:00:00"),
    status: getStatus(new Date("2026-01-30T17:00:00"), new Date("2026-01-30T22:00:00")),
    description: "$0.50 wings",
    likes: 1000,
    image: null,
  },
  {
    id: 6,
    title: "Wing Night",
    restaurant: "Big Wings",
    start_time: new Date("2026-01-30T17:00:00"),
    end_time: new Date("2026-01-30T22:00:00"),
    status: getStatus(new Date("2026-01-30T17:00:00"), new Date("2026-01-30T22:00:00")),
    description: "$0.50 wings",
    likes: 1000,
    image: null,
  }
]
