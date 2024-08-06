import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFastForwardCircleFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#fast-forward-circle-fill_svg__a)"><path fill="#000" d="M8 1.5A6.5 6.5 0 1 0 14.5 8 6.507 6.507 0 0 0 8 1.5m4.3 6.9-3 2.25a.5.5 0 0 1-.8-.4V8a.5.5 0 0 1-.2.4l-3 2.25a.5.5 0 0 1-.8-.4v-4.5a.5.5 0 0 1 .8-.4l3 2.25a.5.5 0 0 1 .2.4V5.75a.5.5 0 0 1 .8-.4l3 2.25a.5.5 0 0 1 0 .8" /></g><defs><clipPath id="fast-forward-circle-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgFastForwardCircleFill);
const Memo = memo(ForwardRef);
export default Memo;