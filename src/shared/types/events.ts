// src/shared/types/events.ts
import { MouseEvent, ChangeEvent, KeyboardEvent, FormEvent } from 'react';

export type MouseEventHandler<T = HTMLElement> = (event: MouseEvent<T>) => void;
export type ChangeEventHandler<T = HTMLInputElement> = (event: ChangeEvent<T>) => void;
export type KeyboardEventHandler<T = HTMLElement> = (event: KeyboardEvent<T>) => void;
export type FormEventHandler<T = HTMLFormElement> = (event: FormEvent<T>) => void;

// Утилитарный тип для извлечения типа пропсов из компонента
export type PropsOf<T> = T extends React.ComponentType<infer P> ? P : never;