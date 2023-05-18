const Footer = () => {
  const footerItems = [
    { name: "Email", href: "mailto:wings@info.com", text: "  wings@info.com" },
    { name: "Phone", href: "tel:+255768544655", text: "  +255 768 544 655" },
  ];
  return (
    <div className="w-full  bg-ghost-white-shade border-t-1 border-lavender p-2 md:px-6  mt-10 py-10">
      <div className="lg:w-8/12 mx-auto">
        <h2>About</h2>
        <p className="my-4">
          Wings is an aviation blog dedicated to exploring the fascinating world
          of flight. From the latest advancements in aircraft technology to the
          captivating stories of legendary aviators, Wings offers a
          comprehensive look into all things aviation.
          <br />
          <br /> Whether you are a seasoned pilot, an aviation enthusiast, or
          simply curious about the wonders of flight, Wings provides engaging
          and informative content that will take you soaring through the skies.
          <br />
          <br /> Join us on this thrilling journey as we delve into the history,
          science, and sheer awe-inspiring beauty of aviation. Get ready to
          spread your wings and embark on an adventure that will leave you
          inspired and in awe of the incredible achievements in the world of
          aviation.
        </p>
        {footerItems.map(({ name, href, text }) => (
          <p key={name} className="my-3 font-bold">
            {name}:
            <a
              href={href}
              className="font-semibold text-royal-blue hover:text-cyan-500"
            >
              {text}
            </a>
          </p>
        ))}
      </div>
      <div className="text-center mt-10">
        <p>© Wings Blog {new Date().getFullYear()}. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
