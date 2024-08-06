import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMusicNotesSimpleFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#music-notes-simple-fill_svg__a)"><path fill="#000" d="M13.308 1.106a.5.5 0 0 0-.43-.091l-8 2A.5.5 0 0 0 4.5 3.5v6.88a2.25 2.25 0 1 0 1 1.87V3.89l7-1.75v6.24a2.25 2.25 0 1 0 1 1.87V1.5a.5.5 0 0 0-.193-.394" /></g><defs><clipPath id="music-notes-simple-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgMusicNotesSimpleFill);
const Memo = memo(ForwardRef);
export default Memo;