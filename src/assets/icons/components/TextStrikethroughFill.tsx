import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTextStrikethroughFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#text-strikethrough-fill_svg__a)"><path fill="#000" d="M13 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1M5.17 5.911C5.374 4.786 6.535 4 8 4c1.137 0 2.1.463 2.574 1.24a.5.5 0 1 1-.854.52C9.434 5.292 8.774 5 8 5c-.956 0-1.733.458-1.847 1.089a.5.5 0 1 1-.984-.178M12 8.5h-1.482c.318.338.49.786.482 1.25C11 11.012 9.682 12 8 12c-1.493 0-2.74-.799-2.964-1.9a.5.5 0 1 1 .979-.2c.125.617 1 1.1 1.985 1.1 1.084 0 2-.572 2-1.25 0-.571-.422-.902-1.607-1.25H4a.5.5 0 1 1 0-1h8a.5.5 0 0 1 0 1" /></g><defs><clipPath id="text-strikethrough-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgTextStrikethroughFill);
const Memo = memo(ForwardRef);
export default Memo;