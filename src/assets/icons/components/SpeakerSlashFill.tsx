import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSpeakerSlashFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#speaker-slash-fill_svg__a)"><path fill="#000" d="M13.37 13.164a.499.499 0 0 1-.393.84.5.5 0 0 1-.347-.168L10 10.943v3.038a.52.52 0 0 1-.244.449.5.5 0 0 1-.563-.035l-4.097-3.188A.25.25 0 0 1 5 11.011V5.443L2.63 2.836a.5.5 0 1 1 .74-.672zm-1.7-3.466a.5.5 0 0 0 .705-.044 2.5 2.5 0 0 0 0-3.305.499.499 0 1 0-.75.66 1.5 1.5 0 0 1 0 1.983.5.5 0 0 0 .044.706m2.557-5.031a.5.5 0 1 0-.745.666 4 4 0 0 1 0 5.334.5.5 0 0 0 .028.718.5.5 0 0 0 .717-.052 5 5 0 0 0 0-6.666M9.563 7.492A.25.25 0 0 0 10 7.323V2.016a.52.52 0 0 0-.18-.4.5.5 0 0 0-.625-.01L6.489 3.708a.25.25 0 0 0-.03.366zM3.75 5H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1.75a.25.25 0 0 0 .25-.25v-5.5A.25.25 0 0 0 3.75 5" /></g><defs><clipPath id="speaker-slash-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgSpeakerSlashFill);
const Memo = memo(ForwardRef);
export default Memo;