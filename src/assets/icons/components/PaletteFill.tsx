import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPaletteFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#palette-fill_svg__a)"><path fill="#000" d="M12.548 3.368A6.45 6.45 0 0 0 8 1.5h-.067A6.5 6.5 0 0 0 1.5 8c0 2.688 1.661 4.941 4.335 5.886A2 2 0 0 0 8.5 12a1 1 0 0 1 1-1h2.888a1.99 1.99 0 0 0 1.95-1.555c.112-.492.166-.995.162-1.5a6.46 6.46 0 0 0-1.952-4.577M5.25 10.5a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5m0-3.5a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5M8 5.5A.75.75 0 1 1 8 4a.75.75 0 0 1 0 1.5M10.75 7a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5" /></g><defs><clipPath id="palette-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgPaletteFill);
const Memo = memo(ForwardRef);
export default Memo;