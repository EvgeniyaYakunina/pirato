import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCodesandboxLogoFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#codesandbox-logo-fill_svg__a)"><path fill="#000" d="M14.368 4.516a1 1 0 0 0-.386-.379L8.48 1.125a1 1 0 0 0-.96 0l-5.5 3.011a1 1 0 0 0-.52.875v5.978a1 1 0 0 0 .52.875l5.5 3.01a.99.99 0 0 0 .96 0l5.5-3.01a1 1 0 0 0 .52-.875V5.011a1 1 0 0 0-.132-.495M7.5 13.726l-2-1.095V9.5a.5.5 0 0 0-.26-.438l-2.74-1.5v-2l5 2.737zM8 7.43 3.041 4.715l2.155-1.18L7.76 4.94a.5.5 0 0 0 .48 0L10.8 3.536l2.155 1.18zm5.5.131-2.74 1.5a.5.5 0 0 0-.26.438v3.13l-2 1.096V8.296l5-2.737z" /></g><defs><clipPath id="codesandbox-logo-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCodesandboxLogoFill);
const Memo = memo(ForwardRef);
export default Memo;