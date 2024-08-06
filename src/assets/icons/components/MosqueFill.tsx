import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMosqueFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#mosque-fill_svg__a)"><path fill="#000" d="M14 8c-.17 0-.34.03-.5.086V8c0-2.611-1.942-3.904-3.36-4.847C9.26 2.566 8.5 2.063 8.5 1.5a.5.5 0 1 0-1 0c0 .563-.76 1.066-1.64 1.652C4.442 4.097 2.5 5.39 2.5 8v.086A1.5 1.5 0 0 0 .5 9.5V13a.5.5 0 0 0 .5.5h3.5A.5.5 0 0 0 5 13v-2a1 1 0 1 1 2 0v2a.5.5 0 0 0 .5.5h1A.5.5 0 0 0 9 13v-2a1 1 0 1 1 2 0v2a.5.5 0 0 0 .5.5H15a.5.5 0 0 0 .5-.5V9.5A1.5 1.5 0 0 0 14 8M2.5 12.5h-1v-3a.5.5 0 1 1 1 0zm12 0h-1v-3a.5.5 0 0 1 1 0z" /></g><defs><clipPath id="mosque-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgMosqueFill);
const Memo = memo(ForwardRef);
export default Memo;