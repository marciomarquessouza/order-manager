export class SettingsTests {
  constructor(private attributte1: string) {}

  method01(justNumber: number): void {
    console.log(`This is just a number ${justNumber}`);
  }

  method02(): string {
    return this.attributte1;
  }
}
