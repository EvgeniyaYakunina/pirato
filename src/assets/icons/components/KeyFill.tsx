import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgKeyFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#key-fill_svg__a)"><path fill="#000" d="M13.536 2.464A5 5 0 0 0 5.244 7.55L1.794 11a1 1 0 0 0-.294.707V13.5a1 1 0 0 0 1 1h2A.5.5 0 0 0 5 14v-1h1a.5.5 0 0 0 .5-.5v-1h1a.5.5 0 0 0 .354-.146l.597-.598c.5.162 1.023.245 1.549.244h.006a5 5 0 0 0 3.53-8.536M11.25 5.75a1 1 0 1 1 0-2 1 1 0 0 1 0 2" /></g><defs><clipPath id="key-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgKeyFill);
const Memo = memo(ForwardRef);
export default Memo;