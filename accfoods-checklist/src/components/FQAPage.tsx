import React, { useState } from 'react'


const faqData = [
  {
    question: "Van is overheating — what should I do?",
    answer: (
      <ul>
        <li>🚨 Pull over and turn off the engine immediately.</li>
        <li>🔥 <strong>Do not open the radiator cap while hot.</strong></li>
        <li>💧 Check for coolant leaks under the van.</li>
        <li>⏳ Wait 15–30 minutes, then top off with coolant or water if needed.</li>
        <li>📞 Report the issue before continuing.</li>
      </ul>
    ),
  },
  {
    question: "I got a flat tire — what should I do?",
    answer: (
      <ul>
        <li>🛑 <strong>Safety First:</strong> Pull over to a safe, flat area away from traffic. Turn on your hazard lights.</li>
        <li>🧯 <strong>Secure the van:</strong> Put it in park, engage the parking brake, and place cones or reflectors if available.</li>
        <li>🧰 <strong>Tools location:</strong> The <strong>jack and impact gun</strong> are located inside the cabin.</li>
        <li>🛞 <strong>Spare tire location:</strong> The spare tire is mounted underneath the rear of the van.</li>
        <li>🔩 <strong>How to release it:</strong> Open the back doors — you'll see <strong>2 bolts</strong> underneath the van near the rear bumper.</li>
        <li>⚡ Use the <strong>impact gun</strong> to remove the bolts and lower the spare tire.</li>
        <li>🔧 Once the spare is accessible, use the jack on the painted yellow areas to lift the van and swap out the damaged tire.</li>
        <li>📞 <strong>If you don’t feel safe or something is missing, call your supervisor immediately.</strong></li>
        <li>✔️ <strong>After replacement:</strong> Make sure the spare is secure, tools are put away, and you’re clear to continue driving safely.</li>
      </ul>
    ),
  },
  {
    question: "Brakes feel soft — what should I do?",
    answer: (
      <ul>
        <li>✅ Pull over safely and avoid high-speed driving.</li>
        <li>🦶 Pump the brake pedal gently — if pressure builds, continue slowly.</li>
        <li>🚫 If it stays soft, <strong>do not continue driving.</strong></li>
        <li>📞 Contact supervisor — could be brake fluid or a leak.</li>
      </ul>
    ),
  },
  {
    question: "I hear a loud clicking or knocking when I turn the wheel — What should I do?",
    answer: (
      <ul>
        <li>🔧 Usually a worn CV joint or suspension issue.</li>
        <li>🐢 Drive slow and avoid sharp turns.</li>
        <li>📞 Contact supervisor — continued driving can worsen damage.</li>
      </ul>
    ),
  },
  {
    question: "My van is shaking when driving at higher speeds — what should I do?",
    answer: (
      <ul>
        <li>🚘 Could be due to unbalanced tires, bad alignment, or worn suspension.</li>
        <li>🐌 Slow down and avoid highways until inspected.</li>
        <li>📝 Note the speed where shaking starts and report it to supervisor.</li>
      </ul>
    ),
  },
  {
    question: "Warning lights popped up on the dash. What do they mean?",
    answer: (
      <ul>
        <li>🔋 <strong>Battery</strong> — Alternator or battery charging issue. Check battery terminals or get it tested.</li>
        <li>🚨 <strong>Brake</strong> — Check brake fluid level or ensure parking brake isn't engaged.</li>
        <li>🌡️ <strong>Engine Temp</strong> — Engine is overheating. Pull over and turn off the van immediately.</li>
        <li>⚠️ <strong>Check Engine</strong> — Sensor, emissions, or mechanical issue. Flashing means urgent — stop driving.</li>
        <li>🛢️ <strong>Oil Pressure</strong> — Low oil or oil pump issue. Stop and check oil level. Don’t continue without checking.</li>
        <li>⛽ <strong>Fuel</strong> — Low fuel. Fill up as soon as possible.</li>
        <li>💡 <strong>Headlight</strong> — One or more exterior lights may be out.</li>
        <li>🌀 <strong>Traction Control</strong> — Slippery conditions or a problem with traction system. Drive with caution.</li>
        <li>🛞 <strong>Tire Pressure</strong> — One or more tires is under-inflated. Check all tires including the spare.</li>
        <li>📡 <strong>ABS</strong> — Anti-lock braking system is not functioning. Brakes still work but may lock in emergencies.</li>
        <li>🔧 <strong>Maintenance Required</strong> — Scheduled service needed soon. Not urgent but don’t delay too long.</li>
      </ul>
    ),
  },
  {
    question: "I hear grinding or squealing when braking — what should I do?",
    answer: (
      <ul>
        <li>🛑 <strong>Yes — this is a serious warning sign.</strong> It usually means your brake pads are worn down and could be damaging your rotors.</li>
        <li>🔊 Grinding = metal-on-metal. Squealing = pad wear indicators are triggered.</li>
        <li>🚫 <strong>Do not continue driving long distances.</strong> Stop in a safe location as soon as possible.</li>
        <li>📞 <strong>Contact supervisor immediately</strong></li>
        <li>💡 Catching this early prevents more expensive damage and keeps you safe on the road.</li>
      </ul>
    ),
  },
  {
    question: "What if I have to leave the van?",
    answer: (
      <>
        <ul>
          <li>❄️ Preserve all <strong>fridge or freezer items</strong>.</li>
          <li>🔐 Make sure the van is <strong>locked</strong>.</li>
          <li>📞 Contact supervisor </li>
          <li>🔑 Place the <strong>keys on the windshield wiper tray</strong> for retrieval.</li>
        </ul>
      </>
    ),
  },
  {
    question: "The van keeps pulling to one side while driving — what should I do?",
    answer: (
      <ul>
        <li>🎯 Could be low tire pressure, misalignment, or brake drag.</li>
        <li>🔍 Check tire pressure on all wheels.</li>
        <li>🛠️ If the problem continues, schedule a wheel alignment check.</li>
      </ul>
    ),
  },
];


const FQAPage = () => {

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  return (
    // <div className='FQA-parent'>
    //   FQAPage
    // </div>

    <>
      <div className="van-faq-container">
        <h2 className="faq-title">🚐 Van Troubleshooting FAQ</h2>
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {item.question}
              <span className="faq-toggle">{openIndex === index ? '−' : '+'}</span>
            </div>
            {openIndex === index && <div className="faq-answer">{item.answer}</div>}
          </div>
        ))}
      </div>
    </>
  )
}

export default FQAPage