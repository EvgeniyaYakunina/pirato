import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMusicNoteFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#music-note-fill_svg__a)"><path fill="#000" d="m13.144 3.521-5-1.5A.5.5 0 0 0 7.5 2.5v6.766a3 3 0 1 0 1 2.234V6.172l4.356 1.307a.5.5 0 0 0 .644-.48V4a.5.5 0 0 0-.356-.478" /></g><defs><clipPath id="music-note-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgMusicNoteFill);
const Memo = memo(ForwardRef);
export default Memo;