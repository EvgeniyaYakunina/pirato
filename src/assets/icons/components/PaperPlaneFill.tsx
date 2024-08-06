import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPaperPlaneFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#paper-plane-fill_svg__a)"><path fill="#000" d="M14.762 13.645a.99.99 0 0 1-1.098.298l-4.997-1.688a.25.25 0 0 1-.17-.237V7.5a.5.5 0 0 0-.533-.5.51.51 0 0 0-.467.516v4.5a.25.25 0 0 1-.17.237l-4.996 1.688a1 1 0 0 1-1.204-1.433l5.998-10.5a1 1 0 0 1 1.743 0l6 10.498a.99.99 0 0 1-.106 1.139" /></g><defs><clipPath id="paper-plane-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgPaperPlaneFill);
const Memo = memo(ForwardRef);
export default Memo;