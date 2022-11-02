import{_ as n,o as e,c as t,f as r}from"./app.a16336e2.js";const a={};function i(s,o){return e(),t("div",null,[r(` #### 1\uFF09\u3001Partial<Type>
\u300BPartial<T> \u53EF\u4EE5\u5FEB\u901F\u628A\u67D0\u4E2A\u63A5\u53E3\u7C7B\u578B\u4E2D\u5B9A\u4E49\u7684\u5C5E\u6027\u53D8\u6210\u53EF\u9009\u7684
\u6E90\u4EE3\u7801
\`\`\`
type Partial<T> = {
    [P in keyof T]?: T[P];
};


interface {
age:number
}
\`\`\`

\u4E3E\u4F8B: 
\`\`\`
interface IUser={
  name:string;
  age:number  
}

type optional = Partial<IUser>

//\u8F6C\u5316\u540E\u7684\u7ED3\u679C
type optional = {
  name?:string;
  age?:number
}
\`\`\`

\u9879\u76EE\u5B9E\u6218: 
\`\`\`
//materialForm.ts  43
type IMaterialVarLength = Partial<IStimuliInputKey<number>>;
\`\`\`

#### 2)\u3001Required<Type>
\u300B\u548CPartial\u521A\u597D\u76F8\u53CD\uFF0C\u5C06\u4E00\u4E2A\u5B9A\u4E49\u4E2D\u7684\u5C5E\u6027\u5168\u90E8\u53D8\u6210\u5FC5\u9009\u53C2\u6570.\u8BA9\u4E00\u4E2A\u7C7B\u578B\u7684\u5C5E\u6027\u5168\u90E8\u5FC5\u586B
\u6E90\u4EE3\u7801

\`\`\`
type Required<T> = {
    [P in keyof T]-?: T[P];
};
\`\`\`
\u4E3E\u4F8B
\`\`\`
interface Person {
    name: string;
    age?: number;
}

type person = Required<Person>;
// person === {name: string; age: number}
\`\`\`
\u9879\u76EE\u5B9E\u6218: 
\`\`\`
interface IExtraProps {
    placeholder?: string;
}
//input audioInput.ts
	protected _getRestOfCompProps(): Required<IExtraProps> {
		return {
			placeholder: this._props.placeholder,
		};
	}
\`\`\`

3\uFF09\u3001Readonly<Type>
\u5982\u679C\u8981\u6C42\u5BF9\u8C61\u4E2D\u7684\u4E00\u4E9B\u5B57\u6BB5\u53EA\u80FD\u5728\u521B\u5EFA\u7684\u65F6\u5019\u88AB\u8D4B\u503C\uFF0C\u4F7F\u7528 readonly \u5B9A\u4E49\u53EA\u8BFB\u5C5E\u6027\u3002(\u53EA\u8BFB\u7684\u7EA6\u675F\u5B58\u5728\u4E8E\u7B2C\u4E00\u6B21\u7ED9\u5BF9\u8C61\u8D4B\u503C\u7684\u65F6\u5019\uFF0C\u800C\u4E0D\u662F\u7B2C\u4E00\u6B21\u7ED9\u53EA\u8BFB\u5C5E\u6027\u8D4B\u503C\u7684\u65F6\u5019)
\u6E90\u4EE3\u7801

\`\`\`
type Readonly<T> = {
    readonly [P in keyof T]: T[P];
};
\u4E3E\u4F8B
interface Person {
    readonly id: number;
    name: string;
let tom: Person = {
    id: 89757,
    name: 'Tom',
};
tom.id = 9527;      //  Cannot assign to 'id' because it is a constant or a read-only 
\`\`\`

\u9879\u76EE\u5B9E\u6218

\`\`\`
//share form.ts (68)
readonly inputConfig: Readonly<TInputConfig>;
readonly value: Readonly<TValue>;
\`\`\`

4)\u3001Record<Keys, Type>()
\u300B Record<K,T>\u5177\u6709\u7ED9\u5B9A\u7C7B\u578BT\u7684\u4E00\u7EC4\u5C5E\u6027K\u7684\u7C7B\u578B\u3002\u5728\u5C06\u4E00\u4E2A\u7C7B\u578B\u7684\u5C5E\u6027\u6620\u5C04\u5230\u53E6\u4E00\u4E2A\u7C7B\u578B\u7684\u5C5E\u6027\u65F6\uFF0CRecord\u975E\u5E38\u65B9\u4FBF\u3002
[\u76F8\u5173\u89E3\u91CA](https://zhuanlan.zhihu.com/p/356662885)
\u6E90\u4EE3\u7801

\`\`\`
type Record<K extends keyof any, T> = {
    [P in K]: T;
};
\`\`\`

\u4E3E\u4F8B

\`\`\`
type person6 = Record<'name' | 'age', string>
// person6 === {name: string; age: string}

type CatName = "miffy" | "boris"
const cats: Record<CatName, person6> = {
   miffy: { name: 10, age: "Persian" },
   boris: { name: 5, age: "Maine Coon" },
}
\`\`\`

\u9879\u76EE\u5B9E\u6218
\`\`\`
//layoutInput.ts
export class LayoutInputConfig extends InputConfigBase<
	ILayoutInputSetting,
	ILayoutValue,
	Record<string, any>
> {
...
}

//Record<string, any>
// {
    [x: string]: person6;   //\u7D22\u5F15\u7B7E\u540D
}

name:any
sex:angry  
\`\`\`
\u7EFC\u5408\u5B9E\u6218\u5E94\u75281

\`\`\`
//\u9488\u5BF9Paradigm \u4E2DblockForm.ts
export const blockInputPresets: Partial<Record<keyof IBlockValue, IInputPropPreset>> = {
...
}
// * \u6267\u884Ckeyof IBlockValue \u7684\u8054\u5408\u7C7B\u578B \u4F8B\u5982maxPump | gain | count;
// * \u6267\u884CRecord maxPump\uFF1AIInputPropPreset\uFF0Cgain\uFF1AIInputPropPreset\uFF0Ccount\uFF1AIInputPropPreset   
export type IInputPropPreset = {
	label: string;
	description?: string;
	constraint?: INumberConstraint;
};
// * \u6267\u884CPartial\u91CC\u9762\u7684\u53C2\u6570 \u90FD\u662F\u4E0D\u5FC5\u586B\u5185\u5BB9
\`\`\`
5\uFF09\u3001Pick<Type, Keys> (\u90E8\u5206\u9009\u62E9)
\u300B\u53EF\u80FD\u9700\u8981\u4ECE\u4E00\u4E2A\u5DF2\u58F0\u660E\u7684\u7C7B\u578B\u4E2D\u62BD\u53D6\u51FA\u4E00\u4E2A\u5B50\u7C7B\u578B\uFF0C\u5728\u5B50\u7C7B\u578B\u4E2D\u5305\u542B\u7236\u7C7B\u578B\u4E2D\u7684\u90E8\u5206\u6216\u5168\u90E8\u5C5E\u6027\uFF0C\u8FD9\u65F6\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528Pick\u6765\u5B9E\u73B0\uFF0C
\u6E90\u4EE3\u7801

\`\`\`
type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};

\u4E3E\u4F8B

interface User {
    id: number;
    name: string;
    age: number;
    gender: number;
    email: string;
}
 
type PickUser = Pick<User, "id" | "name" | "gender">;
 
// \u7B49\u4EF7\u4E8E
type PickUser = {
    id: number;
    name: string;
    gender: number;
    }
\u9879\u76EE\u5B9E\u6218
//multiLevelInput.ts
const defaultSetting: Pick<IMultiLevelInputSetting, 'level'> = {
	level: {
		constraint: numberConstraints.int_1_20,
		lengthRange: numberConstraints.int_1_20,
	},
};

export interface IMultiLevelInputSetting {
    /** \u9ED8\u8BA4\u503C int 1-20 */
    level?: {
        constraint: INumberConstraint;
        lengthRange: IRange;
    };
    varSettings: IMultiLevelVarNumberSetting[];
}
\`\`\`

6)\u3001Omit<Type, Keys>\uFF08\u5C5E\u6027\u5FFD\u7565\uFF09 
\u4E0EPick\u76F8\u53CD\uFF0CPick\u7528\u4E8E\u62E3\u9009\u51FA\u6211\u4EEC\u9700\u8981\u5173\u5FC3\u7684\u5C5E\u6027\uFF0C\u800COmit\u7528\u4E8E\u5FFD\u7565\u6389\u6211\u4EEC\u4E0D\u9700\u8981\u5173\u5FC3\u7684\u5C5E\u6027

\u4E3E\u4F8B
\`\`\`
interface User {
    id: number;
    name: string;
    age: number;
    gender: number;
    email: string;
}
 
// \u8868\u793A\u5FFD\u7565\u6389User\u63A5\u53E3\u4E2D\u7684age\u548Cemail\u5C5E\u6027
type OmitUser = Omit<User, "age" | "email">;
// \u7B49\u4EF7\u4E8E
type OmitUser = {
  id: number;
  name: string;
  gender: number;
};
\`\`\`

\u9879\u76EE\u5B9E\u6218
\`\`\`
	//\u6240\u6709\u7684block.ts\u6587\u4EF6\u4E2D
  protected _createConstants(
		blockValue: IBlockValue
	): Omit<ITrialConstants, 'feedback' | 'fileManager'> {
		return { keys: blockValue.key, area: blockValue.area, pos: blockValue.pos };
	}
\`\`\`

\u6761\u4EF6\u7C7B\u578B
(\u53C2\u8003\u5730\u5740)[https://blog.csdn.net/diecuoxie4468/article/details/102360892?spm=1001.2101.3001.6650.1&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-102360892-blog-104111165.pc_relevant_antiscanv2&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-102360892-blog-104111165.pc_relevant_antiscanv2&utm_relevant_index=2]

7\uFF09\u3001Exclude<UnionType, ExcludedMembers>
\u300B\u4E00\u4E2A\u7C7B\u578B\u4ECE\u53E6\u4E00\u4E2A\u7C7B\u578B\u4E2D\u5254\u9664\u90E8\u5206\u5C5E\u6027key
\u6E90\u7801
\`\`\`
type Exclude<T, U> = T extends U ? never : T;
\`\`\`

\u4E3E\u4F8B
\`\`\`
type T0 = Exclude<"a" | "b" | "c", "a">;
type T0 = "b" | "c"

type T1 = Exclude<"a" | "b" | "c", "a" | "b">;

type T1 = "c"

//\u89E3\u91CA \u5BF9\u4E8E\u8054\u5408\u7C7B\u578B\uFF0C\u662F\u5982\u4F55\u8FDB\u884C\u7C7B\u6BD4\u7684\uFF1F
T1 = | ("a" extends "a" | "b" ? never : "a")
  | ("b" extends "a" | "b" ? never : "b")
  | ("c" extends "a" | "b" ? never : "c")
\u6700\u7EC8\u7ED3\u679C T1 = "c"

type T2 = Exclude<string | number | (() => void), Function>;
     
type T2 = string | number
\`\`\`


\u9879\u76EE\u5B9E\u6218
\`\`\`
// orderedBlock.ts

export type ILevelVarPool<T extends IOrderedTrialLevel> = {
	[key in Exclude<keyof T, 'index'>]: Array<T[key]>;
};


//is.ts    \u5982\u679Cvalue\u4E0D\u662Fnull\u7684\u4E3Atrue
export function noNull<T>(v: T | null): v is Exclude<T, null> {
	return v !== null;
}
\`\`\`

8\uFF09\u3001Extract<Type, Union>
\u300BExtract \u7684\u529F\u80FD\uFF0C\u4E0E Exclude \u76F8\u53CD\uFF0C\u5B83\u662F \u63D0\u53D6 T \u4E2D\u53EF\u4EE5\u8D4B\u503C\u7ED9 U \u7684\u7C7B\u578B\u3002
\u6E90\u7801

\`\`\`
type Extract<T, U> = T extends U ? T : never;

\u4E3E\u4F8B
type T0 = Extract<"a" | "b" | "c", "a" | "f">;
     
type T0 = "a"
type T1 = Extract<string | number | (() => void), Function>;
     
type T1 = () => void
\`\`\`

\u9879\u76EE\u5B9E\u6218\u6682\u65E0
9)\u3001NonNullable<Type>\u975E\u7A7A
\u300B\u7C7B\u578B\u4E2D\u6392\u9664 null \u548C undefined
\u4E3E\u4F8B\uFF1A
\`\`\`
type T04 = NonNullable<string | number | undefined>;  // string | number
type T05 = NonNullable<(() => string) | string[] | null | undefined>;  // (() => string) | string[]
\`\`\`

\u9879\u76EE\u6848\u4F8B

\`\`\`
export function notNullish<T>(v: T | null | undefined): v is NonNullable<T> {
	// eslint-disable-next-line unicorn/no-null
	return v != null;
}
\`\`\`

10)\u3001ReturnType\uFF08\u51FD\u6570\u8FD4\u56DE\u503C\u7C7B\u578B\uFF09 
\u300BReturnType<T>\u7684\u4F5C\u7528\u662F\u7528\u4E8E\u83B7\u53D6\u51FD\u6570 T \u7684\u8FD4\u56DE\u7C7B\u578B\u3002  

\`\`\`
declare function f1(): { a: number; b: string };
 
type T0 = ReturnType<() => string>;
     
type T0 = string
type T1 = ReturnType<(s: string) => void>;
     
type T1 = void
type T2 = ReturnType<<T>() => T>;
     
type T2 = unknown
type T3 = ReturnType<<T extends U, U extends number[]>() => T>;
     
type T3 = number[]
type T4 = ReturnType<typeof f1>;
     
type T4 = {
    a: number;
    b: string;
}
\`\`\`

\u9879\u76EE\u5B9E\u6218\u65E0
11)\u3001Parameters\uFF08\u51FD\u6570\u53C2\u6570\u7C7B\u578B\uFF09
\u300BParameters\u7684\u4F5C\u7528\u662F\u7528\u4E8E\u83B7\u53D6\u51FD\u6570 T \u7684\u53C2\u6570\u7C7B\u578B
\u4E3E\u4F8B

\`\`\`
// \u83B7\u53D6\u51FD\u6570\u6240\u6709\u53C2\u6570\u7684\u7C7B\u578B\u5143\u7EC4
type T0 = Parameters<() => string>;
     
type T0 = []
type T1 = Parameters<(s: string) => void>;
     
type T1 = [s: string]
type T2 = Parameters<<T>(arg: T) => T>;
     
type T2 = [arg: unknown]
\`\`\`
\u9879\u76EE\u5B9E\u6218\u65E0 `)])}const u=n(a,[["render",i],["__file","index.html.vue"]]);export{u as default};
