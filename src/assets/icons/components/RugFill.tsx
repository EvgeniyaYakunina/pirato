import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgRugFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#rug-fill_svg__a)"><path fill="#000" d="M12.5 1a.5.5 0 0 0-.5.5v1h-2v-1a.5.5 0 1 0-1 0v1H7v-1a.5.5 0 1 0-1 0v1H4v-1a.5.5 0 1 0-1 0v13a.5.5 0 0 0 1 0v-1h2v1a.5.5 0 0 0 1 0v-1h2v1a.5.5 0 0 0 1 0v-1h2v1a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-.5-.5M9.714 8.129l-1.5 2.5a.25.25 0 0 1-.428 0l-1.5-2.5a.25.25 0 0 1 0-.258l1.5-2.5a.25.25 0 0 1 .428 0l1.5 2.5a.25.25 0 0 1 0 .258" /></g><defs><clipPath id="rug-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgRugFill);
const Memo = memo(ForwardRef);
export default Memo;