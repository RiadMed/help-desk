package dz.eadn.helpdesk.business.data.enums;

public enum RoleName {
	ADMIN, USER;

	public String toString() {
		if (this.equals(RoleName.ADMIN)) {
			return "ADMIN";
		} else if (this.equals(RoleName.USER)) {
			return "USER";
		}
		return null;
	}

}
