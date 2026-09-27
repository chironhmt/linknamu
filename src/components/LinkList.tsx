import LinkCard from "@/components/LinkCard";
import { links } from "@/lib/links";

export default function LinkList() {
  return (
    <div className="flex w-full flex-col gap-3">
      {links.map((link) => (
        <LinkCard key={link.id} {...link} />
      ))}
    </div>
  );
}
