/* The possible states a workspace window can be opened in. */
export type WorkspaceWindowState = 'maximized' | 'hidden' | 'normal';

/** The default parameters received by all workspaces */
export interface DefaultWorkspaceProps {
  closeWorkspace(ignoreChanges: boolean): void;
  closeWorkspace(): void;
  /**
   * Call this with a no-args function that returns true if the user should be prompted before
   * this workspace is closed; e.g. if there is unsaved data.
   */
  promptBeforeClosing(testFcn: () => boolean): void;
  patientUuid: string;
  handlePostResponse?(): void;
}

export interface WorkspaceWindowSize {
  size: WorkspaceWindowState;
}

export interface WorkspaceWindowSizeProviderProps {
  children?: React.ReactNode;
}

export interface WorkspaceWindowSizeContext {
  windowSize: WorkspaceWindowSize;
  updateWindowSize?(value: WorkspaceWindowState): any;
  active: boolean;
}
