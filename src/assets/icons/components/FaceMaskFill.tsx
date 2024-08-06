import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFaceMaskFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#face-mask-fill_svg__a)"><path fill="#000" d="M14 4.5h-.053a1 1 0 0 0-.605-.625l-5-1.813c-.221-.08-.463-.08-.684 0l-5 1.819a1 1 0 0 0-.605.625H2A2 2 0 0 0 0 6.5V8a2 2 0 0 0 2 2h.324c.45.988 1.362 1.84 2.702 2.51.916.449 1.885.779 2.885.982q.09.015.178 0c1-.203 1.97-.533 2.885-.982 1.34-.67 2.25-1.522 2.702-2.51H14a2 2 0 0 0 2-2V6.5a2 2 0 0 0-2-2M2 9a1 1 0 0 1-1-1V6.5a1 1 0 0 1 1-1v3q0 .25.034.5zm8.5 0h-5a.5.5 0 1 1 0-1h5a.5.5 0 0 1 0 1m0-2h-5a.5.5 0 1 1 0-1h5a.5.5 0 0 1 0 1M15 8a1 1 0 0 1-1 1h-.034Q14 8.75 14 8.5v-3a1 1 0 0 1 1 1z" /></g><defs><clipPath id="face-mask-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgFaceMaskFill);
const Memo = memo(ForwardRef);
export default Memo;