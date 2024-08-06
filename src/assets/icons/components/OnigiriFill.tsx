import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgOnigiriFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#onigiri-fill_svg__a)"><path fill="#000" d="m14.47 9.16-3.49-5.994-.007-.012a3.5 3.5 0 0 0-5.946 0l-.007.012L1.53 9.16a3.5 3.5 0 0 0 2.976 5.34h6.988a3.5 3.5 0 0 0 2.977-5.34m-.792 3.056a2.47 2.47 0 0 1-2.184 1.284H11v-3a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3h-.494a2.5 2.5 0 0 1-2.118-3.83l3.49-5.995a2.5 2.5 0 0 1 4.24 0l3.49 5.994.008.013a2.47 2.47 0 0 1 .062 2.534" /></g><defs><clipPath id="onigiri-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgOnigiriFill);
const Memo = memo(ForwardRef);
export default Memo;