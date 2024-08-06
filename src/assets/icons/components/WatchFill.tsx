import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgWatchFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#watch-fill_svg__a)"><path fill="#000" d="m10.956 3.97-.39-2.148A1 1 0 0 0 9.582 1H6.417a1 1 0 0 0-.983.822l-.39 2.149a4.994 4.994 0 0 0 0 8.058l.39 2.15a1 1 0 0 0 .983.821h3.165a1 1 0 0 0 .984-.822l.39-2.149a4.992 4.992 0 0 0 0-8.058M6.417 2h3.165l.245 1.347a4.98 4.98 0 0 0-3.654 0zm3.165 12H6.417l-.244-1.347a4.98 4.98 0 0 0 3.654 0zm.918-5.5H8a.5.5 0 0 1-.5-.5V5.5a.5.5 0 1 1 1 0v2h2a.5.5 0 1 1 0 1" /></g><defs><clipPath id="watch-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgWatchFill);
const Memo = memo(ForwardRef);
export default Memo;