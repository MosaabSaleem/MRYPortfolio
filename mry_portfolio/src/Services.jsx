import "./Styles/Services.css";

export default function Services() {
  return (
    <div className="Services">
      <h1 className="ServicesTitle">What We Do</h1>
      <p className="ServicesText">At MRY, we offer a range of services to help your business thrive online:</p>
      <ul className="ServicesList">
        <li className="ServicesListItem"><b>Custom Website Development</b> – Tailored solutions that reflect your brand and meet your business needs.</li>
        <li className="ServicesListItem"><b>Responsive Design</b> – Websites that look great on any device, ensuring a seamless user experience.</li>
        <li className="ServicesListItem"><b>SEO Optimization</b> – Strategies to improve your website’s visibility and drive organic traffic.</li>
        <li className="ServicesListItem"><b>E-commerce Solutions</b> – Online stores that are easy to manage and provide a smooth shopping experience for customers.</li>
        <li className="ServicesListItem"><b>Website Maintenance</b> – Ongoing support to keep your site running smoothly and securely.</li>
      </ul>
      <p className="ServicesText">Ready to elevate your online presence? Contact us today to discuss how we can help your business grow!</p>
    </div>
  );
}