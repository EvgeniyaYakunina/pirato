import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMusicNotesFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#music-notes-fill_svg__a)"><path fill="#000" d="M13.308 1.107a.5.5 0 0 0-.43-.092l-8 2A.5.5 0 0 0 4.5 3.5v6.881a2.25 2.25 0 1 0 1 1.869V6.39l7-1.75v3.741a2.25 2.25 0 1 0 1 1.869V1.5a.5.5 0 0 0-.193-.393" /></g><defs><clipPath id="music-notes-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgMusicNotesFill);
const Memo = memo(ForwardRef);
export default Memo;