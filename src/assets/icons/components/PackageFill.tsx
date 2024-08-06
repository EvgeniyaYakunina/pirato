import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPackageFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#package-fill_svg__a)"><path fill="#000" d="m13.98 4.134-5.5-3.009a.99.99 0 0 0-.96 0l-5.5 3.01a1 1 0 0 0-.52.876v5.977a1 1 0 0 0 .52.875l5.5 3.01a.99.99 0 0 0 .96 0l5.5-3.01a1 1 0 0 0 .52-.875V5.011a1 1 0 0 0-.52-.877M8 2l5.022 2.75-1.861 1.018-5.022-2.75zm0 5.5L2.978 4.75l2.12-1.16 5.021 2.75zm5.5 3.49-5 2.737V8.365l2-1.094V9.5a.5.5 0 0 0 1 0V6.723l2-1.095v5.363" /></g><defs><clipPath id="package-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgPackageFill);
const Memo = memo(ForwardRef);
export default Memo;