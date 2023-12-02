type Venue = {
  name: string;
  image: string;
  location: string;
};

export type Event = {
  id: number;
  title: string;
  paragraph: string;
  image: string;
  venue: Venue;
  tags: string[];
  date: string;
};
