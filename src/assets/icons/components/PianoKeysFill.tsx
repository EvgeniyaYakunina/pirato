import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPianoKeysFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#piano-keys-fill_svg__a)"><path fill="#000" d="M13 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1M5.5 13H3V3h1.5v6a.5.5 0 0 0 .5.5h.5zm4 0h-3V9.5H7a.5.5 0 0 0 .5-.5V3h1v6a.5.5 0 0 0 .5.5h.5zm3.5 0h-2.5V9.5h.5a.5.5 0 0 0 .5-.5V3H13z" /></g><defs><clipPath id="piano-keys-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgPianoKeysFill);
const Memo = memo(ForwardRef);
export default Memo;