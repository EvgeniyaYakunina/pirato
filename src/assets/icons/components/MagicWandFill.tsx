import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMagicWandFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#magic-wand-fill_svg__a)"><path fill="#000" d="M15.5 9.5a.5.5 0 0 1-.5.5h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1V8a.5.5 0 0 1 1 0v1h1a.5.5 0 0 1 .5.5m-12-5h1v1a.5.5 0 1 0 1 0v-1h1a.5.5 0 0 0 0-1h-1v-1a.5.5 0 1 0-1 0v1h-1a.5.5 0 0 0 0 1m8 7.5H11v-.5a.5.5 0 0 0-1 0v.5h-.5a.5.5 0 0 0 0 1h.5v.5a.5.5 0 0 0 1 0V13h.5a.5.5 0 0 0 0-1m2.207-7L5 13.707a1 1 0 0 1-1.414 0l-1.294-1.293a1 1 0 0 1 0-1.414L11 2.293a1 1 0 0 1 1.414 0l1.293 1.293a1 1 0 0 1 0 1.414M13 4.293 11.707 3l-2 2L11 6.293z" /></g><defs><clipPath id="magic-wand-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgMagicWandFill);
const Memo = memo(ForwardRef);
export default Memo;