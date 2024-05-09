const ComeToMe1 = [
  {
    title: "Product Design",
    description:
      "Hello! I'm designer with vision to deliver signature expericence",
  },
  {
    title: "User Experience",
    description:
      "Hello! I'm designer with vision to deliver signature expericence",
  },
  {
    title: "User Interface",
    description:
      "Hello! I'm designer with vision to deliver signature expericence",
  },
];
const ComeToMe2 = [
  {
    title: "Web Development",
    description:
      "Hello! I'm designer with vision to deliver signature expericence",
  },
  {
    title: "Mobile Development",
    description:
      "Hello! I'm designer with vision to deliver signature expericence",
  },
  {
    title: "Desktop Development",
    description:
      "Hello! I'm designer with vision to deliver signature expericence",
  },
];
const About = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-4 p-4 rounded-lg bg-white">
        <h2 className="text-xl font-semibold">Come to Me For</h2>
        <div className="flex flex-col gap-3">
          {ComeToMe1.map((item, index) => {
            return (
              <div className="flex flex-col gap-2" key={item.description}>
                <h3 className="text-lg text-gray-600 font-semibold">
                  {index + 1}. {item.title}
                </h3>
                <p className="text-sm text-gray-400">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-4 p-2 rounded-lg bg-white">
        <h2 className="text-xl font-semibold">Come to Me For</h2>
        <div className="flex flex-col gap-3">
          {ComeToMe2.map((item, index) => {
            return (
              <div className="flex flex-col gap-2" key={item.description}>
                <h3 className="text-lg text-gray-600 font-semibold">
                  {index + 1}. {item.title}
                </h3>
                <p className="text-sm text-gray-400">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
