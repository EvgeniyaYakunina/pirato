import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMemoryFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#memory-fill_svg__a)"><path fill="#000" d="M14.5 3.5h-13a1 1 0 0 0-1 1v8a.5.5 0 0 0 1 0v-1h1v1a.5.5 0 0 0 1 0v-1h1v1a.5.5 0 0 0 1 0v-1h1v1a.5.5 0 0 0 1 0v-1h1v1a.5.5 0 0 0 1 0v-1h1v1a.5.5 0 0 0 1 0v-1h1v1a.5.5 0 0 0 1 0v-1h1v1a.5.5 0 0 0 1 0v-8a1 1 0 0 0-1-1M13 6v3H9V6zM7 6v3H3V6z" /></g><defs><clipPath id="memory-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgMemoryFill);
const Memo = memo(ForwardRef);
export default Memo;