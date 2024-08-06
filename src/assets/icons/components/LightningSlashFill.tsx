import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgLightningSlashFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#lightning-slash-fill_svg__a)"><path fill="#000" d="M6.608 4.238a.25.25 0 0 1 0-.338L9.632.659a.5.5 0 0 1 .856.437l-.914 4.585 3.59 1.346a.5.5 0 0 1 .201.814l-1.58 1.692a.25.25 0 0 1-.367 0zm1.735 3.395L3.37 2.164a.5.5 0 1 0-.74.672l2.454 2.7L2.646 8.15a.5.5 0 0 0-.146.307.5.5 0 0 0 .323.511l3.602 1.351-.915 4.583a.5.5 0 0 0 .856.438l3.866-4.143 2.398 2.638a.499.499 0 1 0 .74-.673z" /></g><defs><clipPath id="lightning-slash-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgLightningSlashFill);
const Memo = memo(ForwardRef);
export default Memo;