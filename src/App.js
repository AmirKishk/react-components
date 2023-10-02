import Accordion from "./components/Accordion";

function App() {
  const items = [
    {
      id: "123",
      label: "Hold on to your butts",
      content:
        "Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing.",
    },
    {
      id: "345",
      label: "I gotta piss",
      content:
        "Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you. But I can't give you this case, it don't belong to me. Besides, I've already been through too much shit this morning over this case to hand it over to your dumb ass.",
    },
    {
      id: "567",
      label: "Uuummmm, this is a tasty burger!",
      content:
        "The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.",
    },
  ];
  return <Accordion items={items} />;
}

export default App;
