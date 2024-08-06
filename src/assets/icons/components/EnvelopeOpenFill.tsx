import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgEnvelopeOpenFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#envelope-open-fill_svg__a)"><path fill="#000" d="m14.278 5.584-6-4a.5.5 0 0 0-.556 0l-6 4A.5.5 0 0 0 1.5 6v6.5a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V6a.5.5 0 0 0-.223-.416M6.044 9.5 2.5 12V6.97zm1.023.5h1.864l3.54 2.5H3.528zm2.887-.5L13.5 6.97V12z" /></g><defs><clipPath id="envelope-open-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgEnvelopeOpenFill);
const Memo = memo(ForwardRef);
export default Memo;