import Link from "next/link";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mt-8 flex items-center space-x-2 text-sm text-blue-100"
    >
      <Link
        href="/"
        className="text-blue-700 duration-200 hover:text-blue-800 hover:underline text-md font-medium"
      >
        Home
      </Link>

      {items.map((item, index) => (
        <span
          key={`${item.label}-${index}`}
          className="flex items-center space-x-2"
        >
          <span className="text-blue-800">/</span>

          {item.href ? (
            <Link
              href={item.href}
              className="text-blue-700 duration-200 hover:text-blue-800 hover:underline text-md font-medium"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-blue-700 duration-200 hover:text-blue-800 hover:underline text-md font-medium cursor-pointer">
              {item.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}
