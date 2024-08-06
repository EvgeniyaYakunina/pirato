import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgLightningAFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#lightning-a-fill_svg__a)"><path fill="#000" d="m10.867 7.411-5.95 6.428a.5.5 0 0 1-.854-.455l.854-3.597-3.125-1.403a.5.5 0 0 1-.162-.795L7.58 1.16a.5.5 0 0 1 .858.455l-.856 3.597 3.125 1.402a.5.5 0 0 1 .162.796zm3.857 6.536a.5.5 0 0 1-.487-.022.5.5 0 0 1-.184-.201L13.44 12.5h-2.382l-.612 1.224a.5.5 0 0 1-.894-.448l2.25-4.5a.5.5 0 0 1 .894 0l2.25 4.5a.5.5 0 0 1-.223.67M12.94 11.5l-.69-1.382-.692 1.382z" /></g><defs><clipPath id="lightning-a-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgLightningAFill);
const Memo = memo(ForwardRef);
export default Memo;