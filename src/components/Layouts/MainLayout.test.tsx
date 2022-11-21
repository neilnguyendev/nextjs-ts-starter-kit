import { render, screen } from '@testing-library/react';

import MainLayout from './MainLayout';

describe('Main template', () => {
  describe('Render method', () => {
    it('should have 3 menu items', () => {
      render(
        <MainLayout title="This is a title" description="This is desctiption">
          {null}
        </MainLayout>
      );

      const menuItemList = screen.getAllByRole('listitem');

      expect(menuItemList).toHaveLength(3);
    });
  });
});
