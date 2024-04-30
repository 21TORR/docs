declare module "*.module.css";
declare module "*.module.scss";

declare module "*.jpg" {
	const value: string;
	export default value;
}
