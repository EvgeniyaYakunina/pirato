import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFourKFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#four-k-fill_svg__a)"><path fill="#000" d="M4.972 8.5 6 7.063V8.5zm9.528-5v9a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1M7.75 9a.5.5 0 0 0-.5-.5H7v-3a.5.5 0 0 0-.907-.29l-2.5 3.5A.5.5 0 0 0 4 9.5h2v1a.5.5 0 0 0 1 0v-1h.25a.5.5 0 0 0 .5-.5m3.1-1.39 1.53-1.784a.5.5 0 0 0-.76-.652L9.864 7.225l-.363.423V5.5a.5.5 0 1 0-1 0v5a.5.5 0 0 0 1 0V9.188l.664-.775 1.407 2.347a.502.502 0 0 0 .914-.136.5.5 0 0 0-.056-.379z" /></g><defs><clipPath id="four-k-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgFourKFill);
const Memo = memo(ForwardRef);
export default Memo;