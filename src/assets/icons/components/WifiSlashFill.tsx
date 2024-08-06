import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgWifiSlashFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#wifi-slash-fill_svg__a)"><path fill="#000" d="M13.37 13.164a.5.5 0 1 1-.74.672l-2.104-2.312-1.757 2.117a1 1 0 0 1-.769.36 1 1 0 0 1-.77-.361L.729 5.8a.98.98 0 0 1-.097-1.12 1 1 0 0 1 .261-.299c.63-.478 1.307-.892 2.02-1.234l-.268-.295a.514.514 0 0 1 .008-.711.5.5 0 0 1 .718.023zm2.125-8.107a1 1 0 0 0-.386-.676A11.67 11.67 0 0 0 8 2.001c-.894-.002-1.784.098-2.656.296a.25.25 0 0 0-.125.412l6.406 7.045A.25.25 0 0 0 12 9.746L15.272 5.8a.98.98 0 0 0 .221-.743z" /></g><defs><clipPath id="wifi-slash-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgWifiSlashFill);
const Memo = memo(ForwardRef);
export default Memo;