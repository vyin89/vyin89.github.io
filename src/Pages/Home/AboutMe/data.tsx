import { Text } from "@mantine/core";

export const person = {
  name: "Vincent Yin",
  title: "Frontend Lead Engineer",
  subtitle:
    "I lead teams that build pixel-perfect, engaging, and accessible digital experiences.",
};

export const data = [
  {
    gist: "history",
    text: `Back in 2015, I decided to try my hand at becoming a developer and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I've had the privilege of building software for Australia's largest telecommunications company, a FinTech start-up that reached Unicorn status, a digital start up backed by one of Australia's largest conglomerates, and Australia's number 1 digital assets management platform.`,
  },
  {
    gist: "focus",
    text: `My primary goal is directing the frontend practices of IntelligenceBank, aligning it with cutting-edge technologies and industry best practices. My focus on strategic oversight governs the operations of five dynamic feature teams, comprising of 20 adept developers with 5 developers in my immediate team.`,
  },
  {
    gist: "now",
    text: `When I'm not at the computer, you can find me at the gym or hanging out with my two dogs.`,
    extra: (
      <Text
        component="a"
        href="https://www.instagram.com/goodgalririandluna"
        target="_blank"
      >
        🐶🐶
      </Text>
    ),
  },
];
