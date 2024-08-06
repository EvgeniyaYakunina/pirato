import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMusicNotesMinusFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g fill="#000" clipPath="url(#music-notes-minus-fill_svg__a)"><path d="M14 2.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1M10.133 4.781A1.973 1.973 0 0 1 9.106 2.36a.25.25 0 0 0-.294-.326l-3.933.982a.5.5 0 0 0-.38.485v6.881A2.25 2.25 0 1 0 3.277 14.5c1.24-.014 2.224-1.055 2.224-2.294V6.39l4.579-1.144a.25.25 0 0 0 .054-.465M13.25 5h-.5a.25.25 0 0 0-.25.25v3.131a2.25 2.25 0 1 0-1.224 4.119c1.24-.014 2.224-1.054 2.224-2.294V5.25a.25.25 0 0 0-.25-.25" /></g><defs><clipPath id="music-notes-minus-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgMusicNotesMinusFill);
const Memo = memo(ForwardRef);
export default Memo;