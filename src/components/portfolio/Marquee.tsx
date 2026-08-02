type MarqueeProps = {
  items: string[];
};

export default function Marquee({ items }: MarqueeProps) {
  const track = (
    <div className="flex items-center gap-11 whitespace-nowrap pr-11 text-[clamp(22px,2.6vw,38px)] tracking-[-.02em]">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-11">
          <span className={i % 3 === 2 ? 'font-serif italic opacity-70' : ''}>{item}</span>
          <span className="text-acc">✦</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="overflow-hidden bg-ink py-[22px] text-cream">
      <div className="flex w-max animate-[ms-marquee_34s_linear_infinite] motion-reduce:animate-none">
        {track}
        {track}
      </div>
    </div>
  );
}
